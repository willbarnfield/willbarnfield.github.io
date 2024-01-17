const modeButton1 = document.getElementById("change-mode1");
const modeButton2 = document.getElementById("change-mode2");
const modeButton3 = document.getElementById("change-mode3");
const modeButton4 = document.getElementById("change-mode4");
const modeFigure = document.getElementById("figures");
const modeSelector1 = document.getElementById("mode-selector1");
const modeSelector2 = document.getElementById("mode-selector2");
const modeSelector3 = document.getElementById("mode-selector3");
const modeSelector4 = document.getElementById("mode-selector4");
const figure1 = document.getElementById("mode-fig1");
const figure2 = document.getElementById("mode-fig2");
const figure3 = document.getElementById("mode-fig3");
const figure4 = document.getElementById("mode-fig4");
const massSelector1 = document.getElementById("mass-selector1");
const massSelector2 = document.getElementById("mass-selector2");
const massSelector3 = document.getElementById("mass-selector3");
const massSelector4 = document.getElementById("mass-selector4");
const rim_massesSelector1 = document.getElementById("rim-masses-selector1");
const rim_massesSelector2 = document.getElementById("rim-masses-selector2");
const rim_massesSelector3 = document.getElementById("rim-masses-selector3");
const rim_massesSelector4 = document.getElementById("rim-masses-selector4");

// Defines the rims masses selector
for (let i = 4; i < 11; i++) {
    rim_massesSelector1.innerHTML += `
    <option value="${i}">masses = ${i}</option>
    `
    rim_massesSelector2.innerHTML += `
    <option value="${i}">masses = ${i}</option>
    `
    rim_massesSelector3.innerHTML += `
    <option value="${i}">masses = ${i}</option>
    `
    rim_massesSelector4.innerHTML += `
    <option value="${i}">masses = ${i}</option>
    `
}

// Defines the rim masses selector
for (let i = 15; i < 41; i+=5) {
    rim_massesSelector1.innerHTML += `
    <option value="${i}">mass = ${i}</option>
    `
    rim_massesSelector2.innerHTML += `
    <option value="${i}">mass = ${i}</option>
    `
    rim_massesSelector3.innerHTML += `
    <option value="${i}">mass = ${i}</option>
    `
    rim_massesSelector4.innerHTML += `
    <option value="${i}">mass = ${i}</option>
    `
}

function changeMode(i) {
    return function () {
        let modeSelector;
        let figure;
        let massSelector;
        let rim_massSelector;
        if (i == 1) {
            modeSelector = modeSelector1.value;
            figure = figure1;
            massSelector = massSelector1.value;
            rim_massSelector = rim_massesSelector1.value;
        }
        else if (i == 2) {
            modeSelector = modeSelector2.value;
            figure = figure2;
            massSelector = massSelector2.value;
            rim_massSelector = rim_massesSelector2.value;
        }

        else if (i == 3) {
            modeSelector = modeSelector3.value;
            figure = figure3;
            massSelector = massSelector3.value;
            rim_massSelector = rim_massesSelector3.value;
        }
        else {
            modeSelector = modeSelector4.value;
            figure = figure4;
            massSelector = massSelector4.value;
            rim_massSelector = rim_massesSelector4.value;
        }
        figure.innerHTML = `
            <figure id="mode-fig${i}">
                    <img src="./one_rim_images/${rim_massSelector}-Gon, m_c=${massSelector}, mass=[1], rims=1/eigenmode${modeSelector}.gif" alt="eigenmode${modeSelector}" id="myImage">
                    <figcaption id="img-caption">Figure ${i}: Eigenmode ${modeSelector} center mass = ${massSelector}</figcaption>
                </figure>
            `;
    }
}

function clearFigures() {
    modeFigure.innerHTML = "";
}

function changeMasses(i) {
    return function() {
        if (i == 1) {
            modeSelector1.innerHTML = "";
            massSelector1.innerHTML = "";
            for (let i = 0; i < 2 * rim_massesSelector1.value + 2; i++) {
                modeSelector1.innerHTML += `
                    <option value="${i + 1}">Mode ${i + 1}</option>
                    `
            }
            if (rim_massesSelector1.value > 10) {
                for (let i = 0; i < 11; i += 5) {
                    if (i !== 0) {
                        massSelector1.innerHTML += `
                        <option value="${i}">center mass = ${i}</option>
                        `
                    }
                    else {
                        massSelector1.innerHTML += `
                        <option value="1">center mass = 1</option>
                        `
                    }
                    
                }
            }
            else {
                for (let i = 0; i < 10; i++) {
                    massSelector1.innerHTML += `
                    <option value="${i + 1}">center mass = ${i + 1}</option>
                    `
                }
            }
        }
        else if (i == 2) {
            modeSelector2.innerHTML = "";
            massSelector2.innerHTML = "";
            for (let i = 0; i < 2 * rim_massesSelector2.value + 2; i++) {
                modeSelector2.innerHTML += `
                    <option value="${i + 1}">Mode ${i + 1}</option>
                    `
            }
            if (rim_massesSelector2.value > 10) {
                for (let i = 0; i < 11; i += 5) {
                    if (i !== 0) {
                        massSelector2.innerHTML += `
                        <option value="${i}">center mass = ${i}</option>
                        `
                    }
                    else {
                        massSelector2.innerHTML += `
                        <option value="1">center mass = 1</option>
                        `
                    }
                    
                }
            }
            else {
                for (let i = 0; i < 10; i++) {
                    massSelector2.innerHTML += `
                    <option value="${i + 1}">center mass = ${i + 1}</option>
                    `
                }
            }
        }
        else if (i == 3) {
            modeSelector3.innerHTML = "";
            massSelector3.innerHTML = "";
            for (let i = 0; i < 2 * rim_massesSelector3.value + 2; i++) {
                modeSelector3.innerHTML += `
                    <option value="${i + 1}">Mode ${i + 1}</option>
                    `
            }
            if (rim_massesSelector3.value > 10) {
                for (let i = 0; i < 11; i += 5) {
                    if (i !== 0) {
                        massSelector3.innerHTML += `
                        <option value="${i}">center mass = ${i}</option>
                        `
                    }
                    else {
                        massSelector3.innerHTML += `
                        <option value="1">center mass = 1</option>
                        `
                    }
                    
                }
            }
            else {
                for (let i = 0; i < 10; i++) {
                    massSelector3.innerHTML += `
                    <option value="${i + 1}">center mass = ${i + 1}</option>
                    `
                }
            }
        }
        else {
            modeSelector4.innerHTML = "";
            massSelector4.innerHTML = "";
            for (let i = 0; i < 2 * rim_massesSelector4.value + 2; i++) {
                modeSelector4.innerHTML += `
                    <option value="${i + 1}">Mode ${i + 1}</option>
                    `
            }
            if (rim_massesSelector4.value > 10) {
                for (let i = 0; i < 11; i += 5) {
                    if (i !== 0) {
                        massSelector4.innerHTML += `
                        <option value="${i}">center mass = ${i}</option>
                        `
                    }
                    else {
                        massSelector4.innerHTML += `
                        <option value="1">center mass = 1</option>
                        `
                    }
                    
                }
            }
            else {
                for (let i = 0; i < 10; i++) {
                    massSelector4.innerHTML += `
                    <option value="${i + 1}">center mass = ${i + 1}</option>
                    `
                }
            }
        }
    }
}

modeButton1.addEventListener("click", changeMode(1));
modeButton2.addEventListener("click", changeMode(2));
modeButton3.addEventListener("click", changeMode(3));
modeButton4.addEventListener("click", changeMode(4));
rim_massesSelector1.addEventListener("change", changeMasses(1));
rim_massesSelector2.addEventListener("change", changeMasses(2));
rim_massesSelector3.addEventListener("change", changeMasses(3));
rim_massesSelector4.addEventListener("change", changeMasses(4));

// Initialises functions
for (let i = 1; i < 5; i++) {
    let func = changeMasses(i);
    func();
}

for (let i = 1; i < 5; i++) {
    let func = changeMode(i);
    func();
}


