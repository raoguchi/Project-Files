// Tab Switching Logic
const tabs = document.querySelectorAll('.tab');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active'));
    contents.forEach(c => c.classList.remove('active'));

    tab.classList.add('active');
    const targetId = tab.dataset.tab;
    const targetContent = document.getElementById(targetId);

    if (targetId === 'map' && !targetContent.innerHTML) {
      // Load external map content
      fetch('map.html')
        .then(response => response.text())
        .then(html => {
          targetContent.innerHTML = html;
          const script = targetContent.querySelector('script');
          if (script) eval(script.textContent);
        });
    }

    targetContent.classList.add('active');
  });
});
