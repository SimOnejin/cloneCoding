document.addEventListener("DOMContentLoaded", function() {
    fetch('timeline.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('timeline-container').innerHTML = data;

            // 타임라인 애니메이션 로직
            const items = document.querySelectorAll('.timeline-item');

            const isVisible = (el) => {
                const rect = el.getBoundingClientRect();
                return (
                    rect.top >= 0 &&
                    rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
                );
            };

            const handleScroll = () => {
                items.forEach(item => {
                    if (isVisible(item)) {
                        item.classList.add('visible');
                    }
                });
            };

            window.addEventListener('scroll', handleScroll);
            handleScroll(); // 초기 로드 시 호출하여 뷰포트에 있는 항목을 표시
        })
        .catch(error => console.error('Error loading timeline:', error));
});
