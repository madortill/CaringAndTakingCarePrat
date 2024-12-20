const DATA = { 
    // נוגדי אלרגיה
    "antitironallergic": {
        // תרגול
        "questionsPractice": [        
            {
                type: `multiple`,
                question: `מתי אוודא מול החייל את קבלת כלל הציוד הצה"לי?`,
                ans1: `מסדר ציוד בהגעה לבסיס`,
                ans2: `אין ווידוי כלל`,
                ans3: `בעלייה לאוטובוס מהבקו"ם`,
                ans4: `בבקו"ם עצמו`,
                correctAns: `ans3`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מתי אוודא מול החייל את קבלת כלל הציוד הצה"לי?`,
                ans1: `מסדר ציוד בהגעה לבסיס`,
                ans2: `אין ווידוי כלל`,
                ans3: `בעלייה לאוטובוס מהבקו"ם`,
                ans4: `בבקו"ם עצמו`,
                correctAns: `ans3`
            },
        
        ],
        "amountOfQuestions": 1,
    },
    // אנטיביוטיקה
    "antibiotics": {
        // תרגול
        "questionsPractice": [
        
            {
                type: `multiple`,
                question: `מה מבין הבאים נחשב לאחד מסוגי הקליטה בהגעה ליחידה`,
                ans1: `התמצאותית`,
                ans2: `ברה"נית`,
                ans3: `דיגיטלית`,
                ans4: `לוגיסטית`,
                correctAns: `ans1`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מה מבין הבאים נחשב לאחד מסוגי הקליטה בהגעה ליחידה`,
                ans1: `התמצאותית`,
                ans2: `ברה"נית`,
                ans3: `דיגיטלית`,
                ans4: `לוגיסטית`,
                correctAns: `ans1`
            },
            
        ],
        "amountOfQuestions": 1,
    },
    // מחלות כרוניות
    "chronicDiseases": {
        // תרגול
        "questionsPractice": [
            
            {
                type: `multiple`,
                question: `מה מטרת ח' ההשכמה?`,
                ans1: `וידוא נוכחות`,
                ans2: `וידוא שעות שינה`,
                ans3: `מענה מיידי לבעיות חריגות`,
                ans4: `כל התשובות נכונות`,
                correctAns: `ans4`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מה מטרת ח' ההשכמה?`,
                ans1: `וידוא נוכחות`,
                ans2: `וידוא שעות שינה`,
                ans3: `מענה מיידי לבעיות חריגות`,
                ans4: `כל התשובות נכונות`,
                correctAns: `ans4`
            },
        ],
        "amountOfQuestions": 1
    },
    // עיכול
    "digestion": {
        // תרגול
        "questionsPractice": [
            
            {
                type: `multiple`,
                question: `מהם הזמנים שעל המ"כ לבצע ראיונות לכלל החניכים בצוות?`,
                ans1: `24 שעות`,
                ans2: `48 שעות`,
                ans3: `72 שעות`,
                ans4: `96 שעות`,
                correctAns: `ans2`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מהם הזמנים שעל המ"כ לבצע ראיונות לכלל החניכים בצוות?`,
                ans1: `24 שעות`,
                ans2: `48 שעות`,
                ans3: `72 שעות`,
                ans4: `96 שעות`,
                correctAns: `ans2`
            },
        ],
        "amountOfQuestions": 1
    },
      // משככי כאבים
    "painkillers": {
        // תרגול
        "questionsPractice": [
            {
                type: `binary`,
                question: `ישנו חייל המזדהה כנוצרי/מוסלמי. האם אני מחוייב לכבד את המנהגים מהדת שלו (חגים, מועדים, תפילות וכו)?`,
                correctAns: true
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `binary`,
                question: `ישנו חייל המזדהה כנוצרי/מוסלמי. האם אני מחוייב לכבד את המנהגים מהדת שלו (חגים, מועדים, תפילות וכו)?`,
                correctAns: true
            },
        ],
        "amountOfQuestions": 1
    },
      // נשימה
    "breathing": {
        // תרגול
        "questionsPractice": [
            {
                type: `multiple`,
                question: `מהם זמני התפילות המטכליים?`,
                ans1: `שחרית 40 דקות, מנחה 15 דקות, ערבית 30 דקות`,
                ans2: `שחרית 40 דקות, מנחה 15 דקות, ערבית 15 דקות. לא כולל זמני הליכה`,
                ans3: `שחרית 60 דקות, מנחה 15 דקות, ערבית 15 דקות. לא כולל זמני הליכה`,
                ans4: `שחרית 45 דקות, מנחה 15 דקות, ערבית 20 דקות. לא כולל זמני הליכה`,
                correctAns: `ans2`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `מהם זמני התפילות המטכליים?`,
                ans1: `שחרית 40 דקות, מנחה 15 דקות, ערבית 30 דקות`,
                ans2: `שחרית 40 דקות, מנחה 15 דקות, ערבית 15 דקות. לא כולל זמני הליכה`,
                ans3: `שחרית 60 דקות, מנחה 15 דקות, ערבית 15 דקות. לא כולל זמני הליכה`,
                ans4: `שחרית 45 דקות, מנחה 15 דקות, ערבית 20 דקות. לא כולל זמני הליכה`,
                correctAns: `ans2`
            },
        ],
        "amountOfQuestions": 1
    },
      // תרופות אחרות
    "otherMeds": {
        // תרגול
        "questionsPractice": [
            
            {
                type: `multiple`,
                question: `האם חייל בעל הת"ש 5 זכאי להיות מ"כ`,
                ans1: `כן במידה והוא מוכן לוותר על זה במהלך הטירונות`,
                ans2: `כלל לא`,
                ans3: `כן אם הקצין מוכן להתחשב בבקשה`,
                ans4: `לא כי צריך לסגור שבת`,
                correctAns: `ans2`
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `multiple`,
                question: `האם חייל בעל הת"ש 5 זכאי להיות מ"כ`,
                ans1: `כן במידה והוא מוכן לוותר על זה במהלך הטירונות`,
                ans2: `כלל לא`,
                ans3: `כן אם הקצין מוכן להתחשב בבקשה`,
                ans4: `לא כי צריך לסגור שבת`,
                correctAns: `ans2`
            },
        ],
        "amountOfQuestions": 1
    },
     // another
     "another": {
        // תרגול
        "questionsPractice": [
            
            {
                type: `binary`,
                question: `על המפקדים החדשים של חייל העובר מטירונות לקורס יסוד לגלות על אופיו של החייל במהלך ההכשרה`,
                correctAns: false
            },
        ],
        // מבחן
        "questionsExam": [
            {
                type: `binary`,
                question: `על המפקדים החדשים של חייל העובר מטירונות לקורס יסוד לגלות על אופיו של החייל במהלך ההכשרה`,
                correctAns: false
            },
        ],
        "amountOfQuestions": 1
    },
};

// varubals
let currentQuestion = 0;
let nPracticeCorrectAnswer = 0;
let currentTestQuestion = 0;
let nExamCorrectAnswer = 0;
let strClickedPracticeQuestion;
let arrExamQuestions = [];
let arrExamChosenAnswer = [];
let strUserName;
let formerTestQuestion;
let bTimerListener = true;
let startIndex = 0;
let counter = 0;
// timer
let examTimer;
let timerMinutes;
let timerSecondes;
let sec = 0;
// const
const AMOUNT_OF_QUESTION_PRACTICE = 10;
const AMOUNT_OF_QUESTION_EXAM = 4;
const PASSING_GRADE = 50;

/* onClickPractice
--------------------------------------------------------------
Description: */
const onClickPractice  = () => {
    if (currentQuestion === AMOUNT_OF_QUESTION_PRACTICE) {
        endofPractice();
    } else {
        document.querySelector(`.practiceBottomButton`).removeEventListener("click", onClickPracticeCheck);
        strcurrentPage = "practicePage";
        // מעלים מדפים, סמלים בכותרת וכפתורים למטה
        document.querySelector(`.${strCurrentMedType}Shelf`).classList.add("hidden");
        document.querySelector(`.medTypeSymbol`).classList.add("hidden");
        document.querySelector(`.shelfsButtons`).classList.add("hidden");
        // משנה מאפיינים של כותרת
        document.querySelector(`.title`).classList.remove("titleMedShelfs");
        document.querySelector(`.titleConeiner`).classList.add("titleContainerPractice");
        document.querySelector(`.title`).innerHTML = "תרגול";
        // משנה גל וכפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/cards/Asset 1.svg");
        document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
        document.querySelector('.topButton').classList.add("topButtonPractice");
        // מראה דמות ושאלה
        document.querySelector('.practicePage').classList.remove("hidden");
        document.querySelector('.question').innerHTML = QUESTIONS[currentQuestion]["question"];
        // הופך כפתור בדיקה לאפור
        document.querySelector(`.practiceBottomButton`).classList.add("gray");
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
            document.querySelector(`.ans${i} div`).innerHTML = QUESTIONS[currentQuestion][`ans${i}`];
            document.querySelector(`.ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
}

/* onClickAnswer
--------------------------------------------------------------
Description: */
const onClickAnswer = (event) => {
    // שומר תשובה שנלחצה
    strClickedPracticeQuestion = event.currentTarget.classList[1];
    if (strcurrentPage === "practicePage") {
        // מוריד סימונים קודמים
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
        // משנה תמונה של תשובה למסומנת
        document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        // משנה צבע של כפתור בדיקה ושם עליו מאזין
        document.querySelector(`.practiceBottomButton`).classList.remove("gray");
        document.querySelector(`.practiceBottomButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
        document.querySelector(`.practiceBottomButton`).addEventListener("click", onClickPracticeCheck);
    } else if (strcurrentPage !== "reviewTest") {
        // מסמן שענו כבר על השאלה
        document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "white";
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            if (strClickedPracticeQuestion === "true") {
                document.querySelector(`.false`).style.backgroundColor = "white";
            } else {
                document.querySelector(`.true`).style.backgroundColor = "white";
            }
            document.querySelector(`.${strClickedPracticeQuestion}`).style.backgroundColor = "#79bee0bb";
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            // משנה תמונה של תשובה למסומנת
            document.querySelector(`.examQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
        }
        arrExamChosenAnswer[currentTestQuestion] = strClickedPracticeQuestion;
        // בודק אם כול השאלות נענו
        let bTestComplete = true;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === undefined) {
                bTestComplete = false;
            }
        }
        // אם כול השאלות נענו מאפשר כפתור הגש
        if (bTestComplete) {
            // מוריד פילטר מכפתור הגש ושם עליו מאזין
            document.querySelector(`.examSubmit`).classList.remove("gray");
            document.querySelector(`.examSubmit`).addEventListener("click", submitionPopUp);
        } else {
            // שם פילטר מכפתור הגש ומוריד מאזין
            document.querySelector(`.examSubmit`).classList.add("gray");
            document.querySelector(`.examSubmit`).removeEventListener("click", submitionPopUp);
        }
    }
}

/* onClickPracticeCheck
--------------------------------------------------------------
Description: */
const onClickPracticeCheck = () => {
    // בלחיצה על המשך
    if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/practice_continue_button.svg") {
        // משנה צבע של כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i} img`).classList.remove(objMedsShelfsColors[strCurrentMedType][0]);
        }
        // מוריד סימונים מהשאלות
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.remove("wrongAnswer");
        }
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.remove("correctAnswer");
        document.querySelector(`.practiceQuestionSqure${strClickedPracticeQuestion.slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        // משנה חזרה כפתור בדיקה
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/check_button.svg");
        // משנה שאלה נוכחית ושולח לפונקציה שיוצרת שאלה
        currentQuestion++;
        onClickPractice();
    } else if (document.querySelector(`.practiceBottomButton`).getAttribute("src") === "../assets/images/grapics/practice/check_button.svg") { //בלחיצה על בדיקה
        // מוריד מאזינים מהתשובות
        // משנה צבע של הריבועי תשובות, מכניס תשובות ושם עליהם מאזין
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.ans${i}`).removeEventListener("click", onClickAnswer);
        }
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (QUESTIONS[currentQuestion][`correctAns`] !== strClickedPracticeQuestion) {
            document.querySelector(`.${strClickedPracticeQuestion} div`).classList.add("wrongAnswer");
        } else {
            nPracticeCorrectAnswer++;
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.${QUESTIONS[currentQuestion][`correctAns`]} div`).classList.add("correctAnswer");
        // משנה כפתור בדיקה להמשך 
        document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/practice_continue_button.svg");
    } else {
        nPracticeCorrectAnswer = 0;
        currentQuestion = 0;
        creatMedShelfs();
    }
}

/* endofPractice
--------------------------------------------------------------
Description: change hyphen to space */
const endofPractice = () => {
    // מעלים שאלות ומראה תשובות נכונות
    document.querySelector(`.practiceRightAnswersConteiner`).classList.remove("hidden");
    document.querySelector(`.answersContainer`).classList.add("hidden");
    // מכניס טקסט סיום
    document.querySelector('.question').innerHTML ="השלמתם את התרגול בנושא זה. מוזמנים להמשיך לתרגל עם שאלות נוספות או להמשיך למבחן. בהצלחה";
    document.querySelector(`.practiceRightAnswers`).innerHTML = `${nPracticeCorrectAnswer}/${AMOUNT_OF_QUESTION_PRACTICE}`;
    // משנה צבע של חלונית תשובות ושל כפתור סיום
    document.querySelector(`.practiceBottomButton`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    document.querySelector(`.practiceRightAnswersConteiner`).classList.add(objMedsShelfsColors[strCurrentMedType][0]);
    // מחליף תמונה של כפתור בדיקה לכפתור סיום
    document.querySelector(`.practiceBottomButton`).setAttribute("src", "../assets/images/grapics/practice/endPracticeButton.svg");
}

/* onClickExam
--------------------------------------------------------------
Description: */
const onClickExam = () => {
    // מאפס משתנים
    currentTestQuestion = 0;
    nExamCorrectAnswer = 0;
    arrExamQuestions = [];
    arrExamChosenAnswer = [];
    sec = 0;
    // שומר עמוד נוכחי
    strcurrentPage = "examPrePage";
    document.querySelector(`.examQuestionContainer`).classList.add("hidden"); 
    // מעלים דף פתיחה וכפתור אודות
    document.querySelector(`.homePageButtons`).classList.add("hidden");
    document.querySelector(`.aboutButton`).classList.add("hidden");
    // משנה מאפיינים של כותרת
    document.querySelector(`.title`).innerHTML = "מבחן";
    // כפתור עליון
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    // מראה דף לפני מבחן
    document.querySelector(`.examPage`).classList.remove("hidden");
    document.querySelector(`.beforeExamPage`).classList.remove("hidden");  
    // הופך כפתור התחלה לאפור 
    document.querySelector(`.stratTest`).classList.add("gray");
    // שומר של משתמש ומוודא שהוא יותר מתו אחד 
    strUserName = document.querySelector('.examNameInput').value;
    if (strUserName.length > 1) {
        document.querySelector(`.stratTest`).classList.remove("gray");
    }
    document.querySelector('.examNameInput').addEventListener("input", () => {
        strUserName = document.querySelector('.examNameInput').value;
        if (strUserName.length > 1) {
            document.querySelector(`.stratTest`).classList.remove("gray");
            document.querySelector(`.stratTest`).addEventListener("click", startExam);
            if (bTimerListener) {// קורה רק פעם אחת
                bTimerListener = false;
                document.querySelector(`.stratTest`).addEventListener("click", () => {
                        // מתחיל טיימר
                        examTimer = setInterval(startTimerExam, 1000);
                        let arrAnswerPill = document.querySelectorAll('.answerPill');
                        for (let i = 0; i < arrAnswerPill.length; i++) {
                            // מסמן שלא ענו על השאלה
                            document.querySelector(`.answerPill${i + 1}`).style.backgroundColor = "#f4f4f4b8";
                            arrAnswerPill[i].addEventListener('click', () => {
                                currentTestQuestion = i;
                                startExam();
                        });
                    };
                });
            }
        }
    });

    //1
    if(sessionStorage.getItem('userKind') === 'kors') {
      startIndex = 4;
    } else {
       startIndex = 0;
    }
    // שומר שאלות למבחן
    // for(key of Object.keys(DATA)) {
    //     if(this.counter<4 && this.startIndex === 0) { 
    //         let arrSubjExamQuestion = shuffle(DATA[key]["questionsExam"]);
           
    //       arrExamQuestions.push(arrPracticeQuestion[0]);          
    //     } else if(this.counter < 8 && this.startIndex === 4) {
    //         let arrSubjExamQuestion = shuffle(DATA[key]["questionsExam"]);
    //          arrExamQuestions.push(arrPracticeQuestion[0]);
    //     } 
    //     this.counter++;
    
        
    // }
   
this.counter = 0;

    //2
    for(key of Object.keys(DATA)) {
       console.log(startIndex);
        // שומר את השאלות למבחן מהנושא הנוכחי במערך ומכניס למערך של השאלות למבחן
        let arrSubjExamQuestion =DATA[key]["questionsExam"];
        if( this.counter<4 && startIndex === 0) {
            arrExamQuestions.push(arrSubjExamQuestion[0]);
        }else if( this.counter >3 && startIndex === 4) {
            arrExamQuestions.push(arrSubjExamQuestion[0]);

        }
        this.counter++;
    }
    document.querySelector('.blocking').classList.remove('deleted');
    arrExamQuestions = shuffle(arrExamQuestions);
    for(let i = 0; i<arrExamQuestions.length; i++) {
        console.log(arrExamQuestions[i]);
    }
}

/* startExam
--------------------------------------------------------------
Description: */
const startExam = (event) => {
    if (strcurrentPage === "examPrePage") {
        // מעלים דף של לפני מבחן
        document.querySelector(`.beforeExamPage`).classList.add("hidden"); 
        // מראה מבחן
        document.querySelector(`.examQuestionContainer`).classList.remove("hidden"); 
        // משנה גל, מעלים כפתור עליון
        document.querySelector('.wave').setAttribute("src", "../assets/images/cards/Asset 1.svg");
        document.querySelector('.topButton').classList.add("hidden");
        strcurrentPage = "examQuestion";
        formerTestQuestion = currentTestQuestion;
        // מוריד סימונים קודמים
        document.querySelector(`.false`).style.backgroundColor = "white";
        document.querySelector(`.true`).style.backgroundColor = "white";
        for (let i = 1; i <= 4; i++) {
            document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
        }
    } else {
        if (arrExamChosenAnswer[formerTestQuestion] === undefined) {
            // מסמן שלא ענו על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "#f4f4f4b8";
        } else {
            // מסמן שענו כבר על השאלה
            document.querySelector(`.answerPill${formerTestQuestion + 1}`).style.backgroundColor = "white";
        }
        // מעלים שאלה קודמת
        if (event !== undefined) {
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
                    document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.remove("wrongAnswer");
                }
                // מוריד סימון תשובה נכונה
                document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
            if (event.currentTarget.classList[1] === "testArrowRight") {
                currentTestQuestion--;
            } else if (event.currentTarget.classList[1] === "testArrowLeft") {
                currentTestQuestion++;
            }
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        } else { // תזוזה בין השאלות על ידי כפתורים
            document.querySelector(`.${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
            if (strcurrentPage === "reviewTest") {
                // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
                if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
                   document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
               }
               // מוריד סימון תשובה נכונה
               document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
            }
           //מעדכן מספר שאלה 
            formerTestQuestion = currentTestQuestion;
            document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        }
        if (arrExamQuestions[currentTestQuestion].type === "binary") {
            // מוריד סימנים קודמים
            document.querySelector(`.false`).style.backgroundColor = "white";
            document.querySelector(`.true`).style.backgroundColor = "white";
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.${arrExamChosenAnswer[currentTestQuestion]}`).style.backgroundColor = "#79bee0bb";
            }
        } else {
            // מוריד סימונים קודמים
            for (let i = 1; i <= 4; i++) {
                document.querySelector(`.examQuestionContainer .ans${i} img`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-unmarked.svg");
            }
            if (arrExamChosenAnswer[currentTestQuestion] !== undefined) {
                // משנה תמונה של תשובה למסומנת
                document.querySelector(`.examQuestionSqure${arrExamChosenAnswer[currentTestQuestion].slice(3)}`).setAttribute("src", "../assets/images/grapics/practice/answer-squre-marked.svg");
            }
        }
    }
    // מוריד חצים בשאלה הראשונה והאחרונה
    if (currentTestQuestion > 0 && currentTestQuestion < AMOUNT_OF_QUESTION_EXAM - 1) {
        // מראה חץ אחורה וקדימה
        document.querySelector(`.testArrowRight`).classList.remove("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    } else if (currentTestQuestion === AMOUNT_OF_QUESTION_EXAM - 1) {
        // מעלים חץ קדימה
        document.querySelector(`.testArrowLeft`).classList.add("hidden");
    } else {
        // מראה את השאלה
              document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.remove("hidden");
        // מעלים חץ אחורה
        document.querySelector(`.testArrowRight`).classList.add("hidden"); 
        document.querySelector(`.testArrowLeft`).classList.remove("hidden");
    }
    
    // מראה את סימוני השאלה הנוכחית
    document.querySelector('.testCurrentQuestionDisplay').innerHTML = `שאלה מספר ${currentTestQuestion + 1}`;
    document.querySelector(`.answerPill${currentTestQuestion + 1}`).style.backgroundColor = "#a3a2a2";
    // מראה את השאלה הנוכחית ומכניס אליה את התוכן
    document.querySelector('.examQuestionContainer .question').innerHTML = arrExamQuestions[currentTestQuestion].question;
    if (arrExamQuestions[currentTestQuestion].type === "binary") {
        // שם מאזינים לתשובות
        document.querySelector(`.examQuestionContainer .binary .true`).addEventListener("click", onClickAnswer);
        document.querySelector(`.examQuestionContainer .binary .false`).addEventListener("click", onClickAnswer);
    } else {
        for (let i = 1; i <= 4; i++) {
            // מכניס תוכן לתשובות ושם עליהן מאזין
            document.querySelector(`.examQuestionContainer .ans${i} div`).innerHTML = arrExamQuestions[currentTestQuestion][`ans${i}`];
            document.querySelector(`.examQuestionContainer .ans${i}`).addEventListener("click", onClickAnswer);
        }
    }
    // שם מאזינים לחצים
    document.querySelector(`.testArrowRight`).addEventListener("click", startExam);
    document.querySelector(`.testArrowLeft`).addEventListener("click", startExam);

    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מסמן שהיא לא נכונה
        if (arrExamChosenAnswer[currentTestQuestion] !== String(arrExamQuestions[currentTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[currentTestQuestion]} div`).classList.add("wrongAnswer");
        }
        // מסמן תשובה נכונה בירוק
        document.querySelector(`.answersContainers .${arrExamQuestions[currentTestQuestion]["correctAns"]} div`).classList.add("correctAnswer");
    }
}


/* submitionPopUp
--------------------------------------------------------------
Description:  */
const submitionPopUp = () => {
    if (strcurrentPage === "reviewTest") {
        endOfTest();
    } else {
       // מראה פופ אפ ושם מאזינים לכפתורים בפופ אפ
       document.querySelector(`.examSubmitionPopUp`).classList.remove("hidden");
       document.querySelector(`.popUpSubmit`).addEventListener("click", endOfTest);
       document.querySelector(`.popUpBackToExam`).addEventListener("click", () => {
           // מעלים פופ אפ
           document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
       });
    }
}

/* endOfTest
--------------------------------------------------------------
Description:  */
const endOfTest = () => {
    if (strcurrentPage === "reviewTest") {
        // בודק אם נלחצה תשובה לא נכונה ואם כן מוריד סימון תשובה לא נכונה
        if (arrExamChosenAnswer[formerTestQuestion] !== String(arrExamQuestions[formerTestQuestion]["correctAns"])) {
            document.querySelector(`.answersContainers .${arrExamChosenAnswer[formerTestQuestion]} div`).classList.remove("wrongAnswer");
        }
        // מוריד סימון תשובה נכונה
        document.querySelector(`.answersContainers .${arrExamQuestions[formerTestQuestion]["correctAns"]} div`).classList.remove("correctAnswer");
        document.querySelector(`.${arrExamQuestions[currentTestQuestion].type}`).classList.add("hidden");
        // משנה כפתור סיום להגש
        document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/submit-button.svg");
    } else {
        // עוצר טיימר
        clearInterval(examTimer)
        // שם מאזינים לכפתורים
        document.querySelector(`.reviewTest`).addEventListener("click", reviewTest);
        // בודק כמה שאלות נענו נכון
        nExamCorrectAnswer = 0;
        for (let j = 0; j < AMOUNT_OF_QUESTION_EXAM; j++){
            if (arrExamChosenAnswer[j] === String(arrExamQuestions[j]["correctAns"])) {
                nExamCorrectAnswer++;
            }
        }
        // מחשב ציון
        let nGrade = Math.round((nExamCorrectAnswer/AMOUNT_OF_QUESTION_EXAM) * 100);
        // מכניס שם משתמש
        document.querySelector(`.userNameBig`).innerHTML = strUserName;
        document.querySelector(`.userNameSmall`).innerHTML = strUserName;
        // מכניס תשובות נכונות וציון
        document.querySelector(`.ExamgradeBig`).innerHTML = nGrade;
        document.querySelector(`.ExamgradeSmall`).innerHTML = nGrade;
        document.querySelector(`.rightAnswers`).innerHTML = `${nExamCorrectAnswer}/4`;
        // נותן משוב ויוזאלי לפי הציון
        if (nGrade < PASSING_GRADE) {
            document.querySelector(`.examVerbalGrade`).innerHTML = "לא נורא אולי פעם הבאה";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/sad-smiley-face.svg")`;
        } else {
            document.querySelector(`.examVerbalGrade`).innerHTML = "כל הכבוד";
            document.querySelector('.ExamgradeConteiner').style.backgroundImage = `url("../assets/images/grapics/test/happy-smiley-face.svg")`;
        }
        // שומר תאריך ושעה
        let date = new Date();
        let todayDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`
        let currTime = date.getHours() + ":" + date.getMinutes();
        // מכניס תאריך ושעה
        document.querySelector(`.date`).innerHTML = todayDate;
        document.querySelector(`.time`).innerHTML = currTime;
        // מכניס אורך מבחן
        document.querySelector(`.timerConteiner`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
    }
    document.querySelector(`.${arrExamQuestions[formerTestQuestion].type}`).classList.add("hidden");
    strcurrentPage = "endOfTest";
    // מעלים פופ אפ ואת המבחן ומראה את דף הסיום
    document.querySelector(`.examSubmitionPopUp`).classList.add("hidden");
    document.querySelector(`.examQuestionContainer`).classList.add("hidden");
    document.querySelector(`.afterExamPage`).classList.remove("hidden");
    // משנה גל ומראה כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/cards/Asset 1.svg");
    document.querySelector('.topButton').setAttribute("src", "../assets/images/grapics/home-page/right-arrow.svg");
    document.querySelector(`.topButton`).classList.remove("hidden");
}

/* reviewTest
--------------------------------------------------------------
Description:  */
const reviewTest = (event) => {
    // מעלים את הדף סיום ומראה את המבחן
    document.querySelector(`.examQuestionContainer`).classList.remove("hidden");
    document.querySelector(`.afterExamPage`).classList.add("hidden");
    // משנה גל ומעלים כפתור חזור
    document.querySelector('.wave').setAttribute("src", "../assets/images/cards/Asset 1.svg");
    document.querySelector(`.topButton`).classList.add("hidden");
    // משנה כפתור הגש לסיום
    document.querySelector('.examSubmit').setAttribute("src", "../assets/images/grapics/test/test-review-end-button.svg");
    strcurrentPage = "reviewTest";
    currentTestQuestion = 0;
    startExam();
}

/* pad
--------------------------------------------------------------
Description:  */
const pad = (val) => {
    let valString = val + "";
    if(valString.length < 2)
    {
        return "0" + valString;
    }
    else
    {
        return valString;
    }
}

/* startTimerExam
--------------------------------------------------------------
Description:  */
const startTimerExam = () => {
    sec++;
    timerSecondes = pad(sec%60);
    timerMinutes = pad(parseInt(sec/60));
    // document.querySelector(`.testCurrentQuestionDisplay`).innerHTML = `${timerSecondes} : ${timerMinutes}`;
}

/*
shuffle
------------------------------------------------
Description: take orgnaiz array and shffel it
Parameters: array.
------------------------------------------------
Programer: Gal
------------------------------------------------
*/
function shuffle(arr) {
    let tmp = arr.slice();
    for (let i = 0; i < arr.length; i++) {
        let index = Math.floor(Math.random() * tmp.length);
        arr[i] = tmp[index];
        tmp = tmp.slice(0, index).concat(tmp.slice(index + 1));
    }
    return arr;
}
