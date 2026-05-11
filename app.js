const activities = [
  {
    id: 1,
    title: "城市森林浴体验",
    location: "城市公园",
    time: "周六 09:30",
    description: "适合初次体验森林浴的用户，包含慢行、呼吸练习和自然观察。"
  },
  {
    id: 2,
    title: "亲子自然观察",
    location: "近郊营地",
    time: "周日 10:00",
    description: "面向亲子家庭，包含自然任务卡、植物观察和亲子互动。"
  },
  {
    id: 3,
    title: "睡眠改善主题疗愈",
    location: "森林步道",
    time: "周五 18:30",
    description: "围绕放松、呼吸、声音感知和睡眠改善设计的主题活动。"
  }
];

const activityList = document.getElementById("activityList");
const activityDetail = document.getElementById("activityDetail");
const videoModal = document.getElementById("videoModal");
const videoPanel = document.getElementById("videoPanel");
const landscapeBtn = document.getElementById("landscapeBtn");
const closeVideoBtn = document.getElementById("closeVideoBtn");

function renderActivities() {
  activityList.innerHTML = activities
    .map((item) => {
      return `
        <article class="activity-card" data-id="${item.id}">
          <h3>${item.title}</h3>
          <p>${item.location} · ${item.time}</p>
        </article>
      `;
    })
    .join("");

  document.querySelectorAll(".activity-card").forEach((card) => {
    card.addEventListener("click", () => {
      const id = Number(card.dataset.id);
      const activity = activities.find((item) => item.id === id);
      renderDetail(activity);
    });
  });
}

function renderDetail(activity) {
  activityDetail.innerHTML = `
    <h2>${activity.title}</h2>
    <p><strong>地点：</strong>${activity.location}</p>
    <p><strong>时间：</strong>${activity.time}</p>
    <p>${activity.description}</p>
    <div class="video-entry" id="openVideoBtn">
      点击查看活动视频
    </div>
  `;

  document.getElementById("openVideoBtn").addEventListener("click", openVideo);
}

function openVideo() {
  videoPanel.classList.remove("landscape");
  videoPanel.classList.add("portrait");
  videoModal.classList.remove("hidden");
}

function closeVideo() {
  videoModal.classList.add("hidden");
}

function switchToLandscape() {
  videoPanel.classList.remove("portrait");
  videoPanel.classList.add("landscape");
}

landscapeBtn.addEventListener("click", switchToLandscape);
closeVideoBtn.addEventListener("click", closeVideo);

renderActivities();
