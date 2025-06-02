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

function checkAnswers() {
    const answers = {
        q1: "合わせて",
        q2: "出し",
        q3: "布",
        q4: "倒して",
        q5: "表して",
        q6: "握っ",
    };

    const resultDiv = document.getElementById("result");
    resultDiv.innerHTML = ""; // Clear previous results

    for (let key in answers) {
        const userAnswer = document.getElementById(key).value.trim();
        const isCorrect = userAnswer.toLowerCase() === answers[key].toLowerCase();
        
        const answerDiv = document.createElement("div");
        answerDiv.className = isCorrect ? "correct" : "incorrect";
        answerDiv.innerHTML = `${key.charAt(1)}. ${userAnswer}`;
        
        resultDiv.appendChild(answerDiv);
    }
}

// Add event listener for the button to check answers
document.getElementById('check-answers-button').addEventListener('click', checkAnswers);


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


const paragraphContent = "子どもの遊びにはいろいろありますが、「鬼ごっこ」という のはだいたい世界中にある遊びのようです。その鬼はどうやって決めますか。日本では「じゃんけん」で決めるのが普通です。『じゃんけん、ぼん』と言って、グー、チョキ、パーのどれか1つを出して、負けた人が鬼になります。"
    // Insert the content into the paragraph element
    document.getElementById('unselectableParagraph').innerText = paragraphContent;


const toggleCheckbox = document.getElementById('language-toggle');
    const textContent = document.getElementById('text-trans');
    const textContent1 = document.getElementById('text-trans1');
    const textContent2 = document.getElementById('text-trans2');
    const textContent3 = document.getElementById('text-trans3');
    const textContent6 = document.getElementById('text-trans6');
    const textContent7 = document.getElementById('text-trans7');
    const textContent8 = document.getElementById('text-trans8');
    const textContent9 = document.getElementById('li1');
    const textContent10 = document.getElementById('li2');
    const textContent11 = document.getElementById('li3');
    const textContent4 = document.getElementById('greenp');
    const textContent5 = document.getElementById('redp');
    const nameInput1 = document.getElementById('search-input');
    const nameInput = document.getElementById('q1');
    const nameInput2 = document.getElementById('q2');
    const nameInput3 = document.getElementById('q3');
    const nameInput4 = document.getElementById('q4');
    const nameInput5 = document.getElementById('q5');
    const nameInput6 = document.getElementById('q6');
    const submitBtn = document.getElementById('check-answers-button');
    const switchLabel = document.getElementById('switch-label');

    const englishText1 = "Bab 2";
    const japaneseText1 = "第 2";
    
    const englishText = "Minasan dapat mengakses Honbun Shitsumon<br>Pada tombol berikut ya";
    const japaneseText = "右側のボタンから本文質問にアクセスすることができます。";
    
    const englishText2 = "Mari memulai";
    const japaneseText2 = "スタート";

    const englishText3 = "Silahkan menyisipkan kosakata yang tepat. Ubah bentuk kosakata jika diperlukan";
    const japaneseText3 = "単語を入れなさい。必要なら形を変えなさい。";

    const englishText4 = "jawaban benar";
    const japaneseText4 = "まるです";

    const englishText5 = "jawaban salah";
    const japaneseText5 = "ばつです";

    const englishText8 = "Mulai kuis";
    const japaneseText8= "クイズスタート";

    const englishText6 = "Yuk kita lanjut kuis";
    const japaneseText6= "クイズに行きます";

    const englishText7 = "Latih kemampuanmu dengan kuis ini<br>Dalam waktu 25 menit";
    const japaneseText7 = "このクイズで25分間練習しましょう";

    const englishText9 = "Beranda";
    const japaneseText9= "ホームページ";

    const englishText10 = "Artikel";
    const japaneseText10= "読み物";

    const englishText11 = "Lainnya";
    const japaneseText11= "他";

    const englishPlaceholder1 = "Ingin baca apa hari ini";
    const japanesePlaceholder1 = "あなたの答えはこちらです";

    const englishPlaceholder = "Jawabanmu di sini";
    const japanesePlaceholder = "あなたの答えはこちらです";

    const englishPlaceholder2 = "Jawabanmu di sini";
    const japanesePlaceholder2 = "あなたの答えはこちらです";

    const englishPlaceholder3 = "Jawabanmu di sini";
    const japanesePlaceholder3 = "あなたの答えはこちらです";

    const englishPlaceholder4 = "Jawabanmu di sini";
    const japanesePlaceholder4 = "あなたの答えはこちらです";

    const englishPlaceholder5 = "Jawabanmu di sini";
    const japanesePlaceholder5 = "あなたの答えはこちらです";

    const englishPlaceholder6 = "Jawabanmu di sini";
    const japanesePlaceholder6 = "あなたの答えはこちらです";

    const englishButton = "Submit";
    const japaneseButton = "出す";
    
    // Initialize state
    toggleCheckbox.checked = false;
    textContent.innerHTML = englishText;
    textContent1.innerHTML = englishText1;
    textContent2.innerHTML = englishText2;
    textContent3.innerHTML = englishText3;
    textContent6.innerHTML = englishText6;
    textContent7.innerHTML = englishText7;
    textContent8.innerHTML = englishText8;
    textContent9.innerHTML = englishText9;
    textContent10.innerHTML = englishText10;
    textContent11.innerHTML = englishText11;
    textContent4.innerHTML = englishText4;
    textContent5.innerHTML = englishText5;
    nameInput1.placeholder = englishPlaceholder1;
    nameInput.placeholder = englishPlaceholder;
    nameInput2.placeholder = englishPlaceholder;
    nameInput3.placeholder = englishPlaceholder;
    nameInput4.placeholder = englishPlaceholder;
    nameInput5.placeholder = englishPlaceholder;
    nameInput6.placeholder = englishPlaceholder;
    submitBtn.textContent = englishButton;
    switchLabel.textContent = "ID";

    toggleCheckbox.addEventListener('change', () => {
      if (toggleCheckbox.checked) {
        textContent.innerHTML = japaneseText;
        textContent1.innerHTML = japaneseText1;
        textContent2.innerHTML = japaneseText2;
        textContent3.innerHTML = japaneseText3;
        textContent6.innerHTML = japaneseText6;
        textContent7.innerHTML = japaneseText7;
        textContent8.innerHTML = japaneseText8;
        textContent9.innerHTML = japaneseText9;
        textContent10.innerHTML = japaneseText10;
        textContent11.innerHTML = japaneseText11;
        textContent4.innerHTML = japaneseText4;
        textContent5.innerHTML = japaneseText5;
        nameInput1.placeholder = japanesePlaceholder1;
        nameInput.placeholder = japanesePlaceholder;
        nameInput2.placeholder = japanesePlaceholder;
        nameInput3.placeholder = japanesePlaceholder;
        nameInput4.placeholder = japanesePlaceholder;
        nameInput5.placeholder = japanesePlaceholder;
        nameInput6.placeholder = japanesePlaceholder;
        submitBtn.textContent = japaneseButton;
        switchLabel.textContent = "JP";
      } else {
        textContent.innerHTML = englishText;
        textContent1.innerHTML = englishText1;
        textContent2.innerHTML = englishText2;
        textContent3.innerHTML = englishText3;
        textContent6.innerHTML = englishText6;
        textContent7.innerHTML = englishText7;
        textContent8.innerHTML = englishText8;
        textContent9.innerHTML = englishText9;
        textContent10.innerHTML = englishText10;
        textContent11.innerHTML = englishText11;
        textContent4.innerHTML = englishText4;
        textContent5.innerHTML = englishText5;
        nameInput1.placeholder = englishPlaceholder1;
        nameInput.placeholder = englishPlaceholder;
        nameInput2.placeholder = englishPlaceholder;
        nameInput3.placeholder = englishPlaceholder;
        nameInput4.placeholder = englishPlaceholder;
        nameInput5.placeholder = englishPlaceholder;
        nameInput6.placeholder = englishPlaceholder;
        submitBtn.textContent = englishButton;
        switchLabel.textContent = "ID";
      }
    });
