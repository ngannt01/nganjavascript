var heightElement = document.getElementById('height');
var weightElement = document.getElementById('weight');
var calculateElement = document.getElementById('calculate');

function calculate(height, weight) {
    height = height / 100
    var result = (height < 0 || weight < 0) ? false : weight / (height ** 2)
    return result
}

calculateElement.onclick = (e) => {
    e.preventDefault();
    var height = heightElement.value
    var weight = weightElement.value
    var bmi = calculate(height, weight)

    var result
    result = (!bmi && 'Thông tin bạn nhập vào không chính xác!')
        || (bmi < 18.5 && 'Gầy, bệnh thấp')
        || (bmi >= 18.5 && bmi <= 24.8 && 'Bình thường, Bệnh trung bình')
        || (bmi >= 25.0 && bmi <= 29.9 && 'Béo, Bệnh cao')
        || (bmi >= 30.0 && bmi <= 34.9 && 'Béo 1, Bệnh cao')
        || (bmi >= 35.0 && bmi <= 39.9 && 'Béo 2, Bệnh rất cao')
        || (bmi >= 40 && 'Béo 3, Bệnh nguy hiểm')

    console.log(bmi);
    console.log(result);
}