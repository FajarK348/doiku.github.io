function searchHTML() {
    const searchInput = document.getElementById('search-input').value.toLowerCase(); // Convert input to lowercase
    let targetFile = '';

    // Define your search logic here
    switch (searchInput) {
        case 'bab 1':
        case 'BAB 1':
        case '色のイメージ':
        case '色':
        case '色の':
        case 'イメージ':
        case 'iro no imeeji':
        case 'iro':
        case 'iro no':
        case 'imeeji':
            targetFile = 'bab1.html'; // Targeting HTML in a different directory
            break;
        case 'bab 2':
        case 'BAB 2':
        case '世界のじゃんけん':
        case '世界':
        case '世界の':
        case 'じゃんけん':
        case 'sekai no janken':
        case 'sekai':
        case 'sekai no':
        case 'janken':
            targetFile = 'bab2.html'; // Targeting HTML in a different directory
            break;
        case 'bab 3':
        case 'BAB 3':
        case '不便な駐車場':
        case '不便な':
        case '駐車場':
        case 'fubenna chuushajou':
        case 'fubenna':
        case 'chuushajou':
            targetFile = 'bab3.html'; // Targeting HTML in a different directory
            break;
        case 'bab 4':
        case 'BAB 4':
        case 'アナウンスと親切':
        case 'アナウンス':
        case '親切':
        case 'anaunsu':
        case 'anaunsu to shinsetsu':
            targetFile = 'bab4.html'; // Targeting HTML in a different directory
            break;
        case 'bab 5':
        case 'BAB 5':
        case 'タイムカプセル':
        case 'taimukapuseru':
        case 'time capsule':
            targetFile = 'bab5.html'; // Targeting HTML in a different directory
            break;
        case 'bab 6':
        case 'BAB 6':
        case '夢の自動運転':
        case '夢':
        case '夢の':
        case '自動運転':
        case 'yume no jidouunten':
        case 'yume':
        case 'jidouunten':
            targetFile = 'bab6.html'; // Targeting HTML in a different directory
            break;
        case 'bab 7':
        case 'BAB 7':
        case 'ギネスブックに挑戦':
        case 'ギネスブック':
        case '挑戦':
        case 'ginesubukku ni chousen':
        case 'chousen':
        case 'ginesubukku':
        case 'guiness book':
            targetFile = 'bab7.html'; // Targeting HTML in a different directory
            break;
        case 'bab 8':
        case 'BAB 8':
        case '100%の占い師':
        case '100%の':
        case '占い師':
        case '100% no uranaishi':
        case '100%':
        case 'uranaishi':
            targetFile = 'bab8.html'; // Targeting HTML in a different directory
            break;
        case 'bab 9':
        case 'BAB 9':
        case 'やる気':
        case 'yaruki':
            targetFile = 'bab9.html'; // Targeting HTML in a different directory
            break;
        case 'bab 10':
        case 'BAB 10':
        case 'しょうがない':
        case 'shouganai':
            targetFile = 'bab10.html'; // Targeting HTML in a different directory
            break;
        case 'bab 11':
        case 'BAB 11':
        case 'いろいろな選択':
        case 'いろいろな':
        case '選択':
        case 'iroirona sentaku':
        case 'iroirona':
        case 'sentaku':
            targetFile = 'bab11.html'; // Targeting HTML in a different directory
            break;
        case 'bab 12':
        case 'BAB 12':
        case '格言・名言':
        case '格言':
        case '名言':
        case 'kakugen meigen':
        case 'kakugen':
        case 'meigen':
            targetFile = 'bab12.html'; // Targeting HTML in a different directory
            break;
        default:
            alert('File not found. Please try again.');
            return;
    }

    // Redirect to the target HTML file
    window.location.href = targetFile;
}

// Add event listener for the Enter key
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        searchHTML(); // Call the search function when Enter is pressed
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const questions = document.querySelectorAll('.faq-question');

    questions.forEach(question => {
        question.addEventListener('click', function() {
            const answer = this.nextElementSibling;

            // Toggle the display of the answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });
});