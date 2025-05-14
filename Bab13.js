function searchHTML() {
    const searchInput = document.getElementById('search-input').value.toLocaleLowerCase(); // Convert input to lowercase
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
            targetFile = 'Bab1.html'; // Targeting HTML in a different directory
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
            targetFile = 'Bab2.html'; // Targeting HTML in a different directory
            break;
        case 'bab 3':
        case 'BAB 3':
        case '不便な駐車場':
        case '不便な':
        case '駐車場':
        case 'fubenna chuushajou':
        case 'fubenna':
        case 'chuushajou':
            targetFile = 'Bab3.html'; // Targeting HTML in a different directory
            break;
        case 'bab 4':
        case 'BAB 4':
        case 'アナウンスと親切':
        case 'アナウンス':
        case '親切':
        case 'anaunsu':
        case 'anaunsu to shinsetsu':
            targetFile = 'Bab4.html'; // Targeting HTML in a different directory
            break;
        case 'bab 5':
        case 'BAB 5':
        case 'タイムカプセル':
        case 'taimukapuseru':
        case 'time capsule':
            targetFile = 'Bab5.html'; // Targeting HTML in a different directory
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
            targetFile = 'Bab6.html'; // Targeting HTML in a different directory
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
            targetFile = 'Bab7.html'; // Targeting HTML in a different directory
            break;
        case 'bab 8':
        case 'BAB 8':
        case '100%の占い師':
        case '100%の':
        case '占い師':
        case '100% no uranaishi':
        case '100%':
        case 'uranaishi':
            targetFile = 'Bab8.html'; // Targeting HTML in a different directory
            break;
        case 'bab 9':
        case 'BAB 9':
        case 'やる気':
        case 'yaruki':
            targetFile = 'Bab9.html'; // Targeting HTML in a different directory
            break;
        case 'bab 10':
        case 'BAB 10':
        case 'しょうがない':
        case 'shouganai':
            targetFile = 'Bab10.html'; // Targeting HTML in a different directory
            break;
        case 'bab 11':
        case 'BAB 11':
        case 'いろいろな選択':
        case 'いろいろな':
        case '選択':
        case 'iroirona sentaku':
        case 'iroirona':
        case 'sentaku':
            targetFile = 'Bab11.html'; // Targeting HTML in a different directory
            break;
        case 'bab 12':
        case 'BAB 12':
        case '格言・名言':
        case '格言':
        case '名言':
        case 'kakugen meigen':
        case 'kakugen':
        case 'meigen':
            targetFile = 'Bab12.html'; // Targeting HTML in a different directory
            break;
        case 'bab 13':
        case 'BAB 13':
        case 'bab13':
        case '子供の時の夢':
        case '子供':
        case '時':
        case '夢':
        case 'kodomo no toki no yume':
        case 'kodomo':
        case 'toki':
        case 'yume':
            targetFile = 'Bab13.html'; // Targeting HTML in a different directory
            break;
        case 'bab 14':
        case 'BAB 14':
        case 'bab14':
        case '笑いの効果':
        case '笑い':
        case '効果':
        case 'warai no kouka':
        case 'warai':
        case 'kouka':
            targetFile = 'Bab14.html'; // Targeting HTML in a different directory
            break;
        case 'bab 15':
        case 'BAB 15':
        case 'bab15':
        case '絵はがき~富士登山':
        case '絵はがき':
        case '富士登山':
        case '富士':
        case '登山':
        case 'ehagaki fujitozan':
        case 'ehagaki':
        case 'fujitozan':
        case 'fuji':
            targetFile = 'Bab15.html'; // Targeting HTML in a different directory
            break; 
        case 'bab 16':
        case 'BAB 16':
        case 'bab16':
        case '梅雨':
        case '梅':
        case '雨':
        case 'tsuyu':
            targetFile = 'Bab16.html'; // Targeting HTML in a different directory
            break; 
        case 'bab 17':
        case 'BAB 17':
        case 'bab17':
        case 'トリックアート':
        case 'トリック':
        case 'アート':
        case 'trickart':
        case 'trick':
        case 'art':
        case 'torikkuaato':
            targetFile = 'Bab17.html'; // Targeting HTML in a different directory
            break; 
        case 'bab 18':
        case 'BAB 18':
        case 'bab18':
        case '行列のできる店':
        case '行列':
        case 'できる店':
        case '店':
        case 'できる':
        case 'gyouretsu no dekiru mise':
        case 'gyouretsu':
        case 'dekiru mise':
        case 'mise':
            targetFile = 'Bab18.html'; // Targeting HTML in a different directory
            break; 
        case 'bab 19':
        case 'BAB 19':
        case 'bab19':
        case '素朴な疑問':
        case '素朴な':
        case '疑問':
        case 'sobokuna gimon':
        case 'sobokuna':
        case 'gimon':
            targetFile = 'Bab19.html'; // Targeting HTML in a different directory
            break; 
        case 'bab 20':
        case 'BAB 20':
        case 'bab20':
        case '車のコミュニケーション':
        case '車':
        case 'コミュニケーション':
        case 'kuruma no komyunikeeshon':
        case 'kuruma':
        case 'komyunikeeshon':
            targetFile = 'Bab20.html'; // Targeting HTML in a different directory
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

// Add event listener for the search button
document.getElementById('search-button').addEventListener('click', function() {
    searchHTML(); // Call the search function when the button is clicked
});

function checkAnswers(formId, answers, resultId) {
    const resultDiv = document.getElementById(resultId);
    resultDiv.innerHTML = ""; // Clear previous results

    for (let key in answers) {
        const userAnswer = document.getElementById(key).value.trim();
        const isCorrect = userAnswer.toLowerCase() === answers[key].toLowerCase();
        
        const answerDiv = document.createElement("div");
        answerDiv.className = isCorrect ? "correct" : "incorrect";
        answerDiv.innerHTML = ` ${key.charAt(1)}. Your answer: "${userAnswer}"`;
        
        resultDiv.appendChild(answerDiv);
    }
}

// Get the button element
const darkModeToggleButton = document.getElementById('toggleDarkMode');

let darkModeLogo = document.getElementById('logo');

// Add an event listener to the button
darkModeToggleButton.addEventListener('click', () => {
    // Toggle dark mode class on the body
    document.body.classList.toggle('dark-mode');

    // Save the user's preference in localStorage
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeLogo.src = "images/logo doiku white.png";
    } else {
        localStorage.setItem('theme', 'light');
        darkModeLogo.src = "images/logo doiku 2.png";
    }
});

// Check for saved user preference, if any, on page load
const userSavedTheme = localStorage.getItem('theme');

if (userSavedTheme === 'dark') {

    document.body.classList.add('dark-mode');
    darkModeLogo.src = "images/logo doiku white.png";
} else {
    document.body.classList.remove('dark-mode');
}


const paragraphContent = "今年の春地元の大学を卒業して大阪のデザイン会社に就職することが決まった。それで、引っ越しをすることになって、 押し入れの中の物を整理していた。奥の方にあった箱のふたを開けると小学校の卒業文集が入っていた。題名は「将来なりたい職業」。私は懐かしくなって、作業を少しばかり休んで読んでみることにした。";

    // Insert the content into the paragraph element
    document.getElementById('unselectableParagraph').innerText = paragraphContent;
