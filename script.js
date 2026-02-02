const projects = [
  {
    slug: "movement-system",
    title: "Advanced Roblox Movement System v2.1",
    displayName: "Movement System", // ✅ Fixed display
    description: "Smooth wall-running, dash, slide, bunny hop. Production ready.",
    thumbnail: "https://via.placeholder.com/600x300/8B00FF/FFFFFF?text=Movement+v2.1",
    devNotes: "https://github.com/m-hito/BrawlDevNotes#movement-system",
    repoUrl: "https://ouo.io/MrWrM2",
    ytVideo: "https://youtube.com/watch?v=movement-tutorial",
    waitTime: 15,
    brawlNotes: "BrawlDev: Wall-run needs PathfindingService optimization"
  },
  {
    slug: "npc-factory",
    title: "Advanced Roblox NPC Factory v2.1",
    displayName: "NPC Factory", // ✅ Fixed display
    description: "Spawn NPCs with pathfinding, combat AI, squad behavior.",
    thumbnail: "https://via.placeholder.com/600x300/FF6B6B/FFFFFF?text=NPC+Factory",
    devNotes: "https://github.com/m-hito/BrawlDevNotes#npc-factory",
    repoUrl: "https://ouo.io/MrWrM2",
    ytVideo: "https://youtube.com/watch?v=npc-tutorial",
    waitTime: 12,
    brawlNotes: "BrawlDev: Use CollectionService for NPC tagging"
  }
];

const slug = window.location.pathname.split('/').pop() || 'movement-system';
const project = projects.find(p => p.slug === slug) || projects[0];

// Load immediately (trust + UX)
document.getElementById('title').textContent = project.title;
document.getElementById('description').textContent = project.description;
document.getElementById('thumbnail').style.backgroundImage = `url(${project.thumbnail})`;
document.getElementById('thumbnail').innerHTML = '';
document.getElementById('notes-link').href = project.devNotes;
document.getElementById('brawl-notes').textContent = project.brawlNotes;
document.getElementById('preparing-text').textContent = `⏳ Preparing ${project.displayName}...`;

// YouTube button
const demoBtn = document.getElementById('demo-btn');
demoBtn.href = project.ytVideo;
demoBtn.innerHTML = '<div class="text-3xl mb-2">📺</div><div class="font-bold text-xl group-hover:underline">Tutorial Video</div>';

// TIMER - ONLY prepare-card changes
let timeLeft = project.waitTime;
const timer = document.getElementById('timer');
const bar = document.getElementById('timer-bar');
const prepareCard = document.getElementById('prepare-card');

const interval = setInterval(() => {
  timeLeft--;
  timer.textContent = timeLeft;
  bar.style.width = `${(timeLeft/project.waitTime)*100}%`;

  if (timeLeft <= 0) {
    clearInterval(interval);
    prepareCard.innerHTML = `
      <div class="text-center p-8">
        <div class="text-3xl font-bold text-emerald-400 mb-2">✅ ${project.displayName} Ready</div>
        <div class="text-slate-300 mb-2">Verified by creator</div>
        <div class="text-xs text-slate-400">Safe GitHub link</div>
      </div>
    `;
    // GitHub becomes ad
    document.getElementById('github-btn').href = project.repoUrl;
  }
}, 1000);

// Other Systems → NEW SECTION (keeps main buttons)// Replace Other Systems onclick with this:
document.getElementById('other-btn').onclick = (e) => {
  e.preventDefault();
  const otherSystems = document.getElementById('other-systems');
  if (!otherSystems) return; // Safety check
  
  otherSystems.classList.remove('hidden');
  otherSystems.innerHTML = `
    <h3 class="text-3xl font-bold mb-8 text-center">🔥 Systems I Have</h3>
    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      ${projects.map((p, i) => `
        <a href="/${p.slug}" class="group flex flex-col justify-center items-center 
             min-h-[140px] h-[140px]
             bg-gradient-to-r from-indigo-500 to-purple-500 
             hover:from-indigo-600 hover:to-purple-600
             p-4 rounded-xl text-center transition-all duration-300 
             transform hover:-translate-y-1 border-2 border-transparent hover:border-indigo-400">
          <div class="text-2xl mb-3">${i === 0 ? '⭐' : '⚡'}</div>
          <div class="font-bold text-lg">${p.displayName}</div>
          <div class="text-sm text-slate-300">${p.waitTime}s unlock</div>
        </a>
      `).join('')}
    </div>
  `;
};

