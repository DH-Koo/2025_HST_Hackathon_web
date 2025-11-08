let count = localStorage.getItem('likeCount') || 0;
const countEl = document.getElementById('like-count');
countEl.textContent = count;

document.getElementById('like-btn').addEventListener('click', () => {
  count++;
  localStorage.setItem('likeCount', count);
  countEl.textContent = count;
});
