chrome.runtime.onMessage.addListener(request => {
  if(request.type == 'open-modal'){
    iframe.src = chrome.extension.getURL("dist/index.html");
    dialog.showModal();
  }
});

const modal = document.createElement("dialog");
modal.setAttribute(
  "style",`
  height: 500px;
  width: 900px;
  border: none;
  top: 50px;
  border-radius: 10px;
  background-color: white;
  position: fixed;
  margin: auto;
  box-shadow: 0px 12px 48px rgba(29, 5, 64, 0.32);
`
);

modal.innerHTML = `
  <div style="display: flex; flex-direction: column; margin: 0; padding: 0;">
    <div style="display: flex; justify-content: flex-end; height: 25px;">
      <div id="closeBtn"
        style="border: none; backgroud-color: white; cursor: pointer; margin: 0px 5px;">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-square-x" width="25" height="25" viewBox="0 0 24 24" stroke-width="1.5" stroke="#2c3e50" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
          <rect x="4" y="4" width="16" height="16" rx="2" />
          <path d="M10 10l4 4m0 -4l-4 4" />
        </svg>
      </div>
    </div>
    <iframe id="vue-content"; style="height: 460px"></iframe>
  <div>
  `;

document.body.appendChild(modal);

const iframe = document.getElementById("vue-content");
iframe.src = chrome.extension.getURL("dist/index.html");
iframe.frameBorder = 0;

const dialog = document.querySelector("dialog");
dialog.querySelector("#closeBtn").addEventListener("click", () => {
  iframe.src = null;
  dialog.close();
});