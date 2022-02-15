const openYoutubeVideo = () => {
  const ip = document.getElementById("ip").value || "181.130.51.222";
  const video = document.getElementById("video").value;
  fetch(`http://${ip}:19999/open-youtube-video`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ video }),
  }).then(() => (res) => res.json());
};

const openNotepad = () => {
  const ip = document.getElementById("ip").value || "181.130.51.222";
  fetch(`http://${ip}:19999/open-notepad`, {
    method: "POST",
  }).then(() => {});
};

const getIpData = async () => {
  const ip = document.getElementById("ip").value || "181.130.51.222";
  const request = await fetch(`http://${ip}:19999/ip-data`, {
    method: "GET",
  });
  let { data } = await request.json();
  document.getElementById("ipData").innerText = data;
};
