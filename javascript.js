$(document).ready(function () {
  var types = [
    { id: 1, name: "Protein" },
    { id: 2, name: "Fat + Protein" },
    { id: 3, name: "Fat" },
    { id: 4, name: "Carbohydrates" },
    { id: 5, name: "Cheese" },
    { id: 6, name: "Canned Food" },
    { id: 7, name: "Vegetables" },
    { id: 8, name: "Fruits" }
  ];

  var foods = [
    {
      ID: "1",
      FoodNameEnglish: "Chicken breast",
      FoodNameArabic: "صدر الدجاج ",
      TypeID: "1",
      weight100: "100",
      Calories: "165.00",
      Protein: "31.00",
      Carbohydrates: "0.00",
      Fats: "3.50",
      DietaryFiber: "0.00"
    },
    {
      ID: "2",
      FoodNameEnglish: "Canned tuna in water",
      FoodNameArabic: "تونة معلبة بالماء",
      TypeID: "1",
      weight100: "100",
      Calories: "107.00",
      Protein: "23.00",
      Carbohydrates: "0.90",
      Fats: "0.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "3",
      FoodNameEnglish: "Canned tuna in sunflower oil",
      FoodNameArabic: "تونة معلبة بزيت دوار الشمس",
      TypeID: "1",
      weight100: "100",
      Calories: "161.00",
      Protein: "27.00",
      Carbohydrates: "0.00",
      Fats: "6.20",
      DietaryFiber: "0.00"
    },
    {
      ID: "4",
      FoodNameEnglish: "Medium whole egg",
      FoodNameArabic: "بيضة متوسطة كاملة ",
      TypeID: "1",
      weight100: "100",
      Calories: "140.00",
      Protein: "12.00",
      Carbohydrates: "0.00",
      Fats: "10.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "5",
      FoodNameEnglish: "Egg white",
      FoodNameArabic: "بياض بيض ",
      TypeID: "1",
      weight100: "100",
      Calories: "52.00",
      Protein: "10.90",
      Carbohydrates: "0.70",
      Fats: "0.20",
      DietaryFiber: "0.00"
    },
    {
      ID: "6",
      FoodNameEnglish: "Cottage cheese",
      FoodNameArabic: "جبن قريش ",
      TypeID: "1",
      weight100: "100",
      Calories: "72.00",
      Protein: "12.00",
      Carbohydrates: "3.00",
      Fats: "1.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "7",
      FoodNameEnglish: "Low-fat milk",
      FoodNameArabic: "حليب قليل الدسم ",
      TypeID: "1",
      weight100: "100",
      Calories: "40.00",
      Protein: "3.00",
      Carbohydrates: "4.70",
      Fats: "1.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "8",
      FoodNameEnglish: "Skim milk",
      FoodNameArabic: "حليب خالي الدسم",
      TypeID: "1",
      weight100: "100",
      Calories: "32.00",
      Protein: "3.00",
      Carbohydrates: "4.70",
      Fats: "0.10",
      DietaryFiber: "0.00"
    },
    {
      ID: "9",
      FoodNameEnglish: "Low-fat yogurt",
      FoodNameArabic: "روب قليل الدسم ",
      TypeID: "1",
      weight100: "100",
      Calories: "57.00",
      Protein: "4.70",
      Carbohydrates: "7.00",
      Fats: "1.10",
      DietaryFiber: "0.00"
    },
    {
      ID: "10",
      FoodNameEnglish: "Full-fat yogurt",
      FoodNameArabic: "روب كامل الدسم",
      TypeID: "1",
      weight100: "100",
      Calories: "70.00",
      Protein: "4.30",
      Carbohydrates: "5.70",
      Fats: "3.30",
      DietaryFiber: "0.00"
    },
    {
      ID: "11",
      FoodNameEnglish: "Skim yogurt",
      FoodNameArabic: "روب خالي الدسم",
      TypeID: "1",
      weight100: "100",
      Calories: "50.00",
      Protein: "4.80",
      Carbohydrates: "7.30",
      Fats: "0.10",
      DietaryFiber: "0.00"
    },
    {
      ID: "12",
      FoodNameEnglish: "Yogurt",
      FoodNameArabic: "لبــــن",
      TypeID: "1",
      weight100: "100",
      Calories: "62.00",
      Protein: "3.20",
      Carbohydrates: "4.80",
      Fats: "3.60",
      DietaryFiber: "0.00"
    },
    {
      ID: "13",
      FoodNameEnglish: "Salmon - Tilapia",
      FoodNameArabic: "سلمون - بلطي ",
      TypeID: "1",
      weight100: "100",
      Calories: "160.00",
      Protein: "21.00",
      Carbohydrates: "0.00",
      Fats: "8.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "14",
      FoodNameEnglish: "Roast beef",
      FoodNameArabic: "لحم بقري مشوي ",
      TypeID: "1",
      weight100: "100",
      Calories: "170.00",
      Protein: "30.00",
      Carbohydrates: "0.00",
      Fats: "5.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "15",
      FoodNameEnglish: "Smoked turkey luncheon",
      FoodNameArabic: "لانشون رومي مدخن ",
      TypeID: "1",
      weight100: "100",
      Calories: "133.00",
      Protein: "16.00",
      Carbohydrates: "2.00",
      Fats: "6.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "16",
      FoodNameEnglish: "Greek yogurt cup",
      FoodNameArabic: "روب يوناني علبة ",
      TypeID: "1",
      weight100: "100",
      Calories: "94.00",
      Protein: "5.00",
      Carbohydrates: "14.00",
      Fats: "2.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "17",
      FoodNameEnglish: "Flavored Greek yogurt",
      FoodNameArabic: "لبن يوناني منكه",
      TypeID: "1",
      weight100: "100",
      Calories: "90.00",
      Protein: "8.00",
      Carbohydrates: "10.00",
      Fats: "2.00",
      DietaryFiber: "2.70"
    },
    {
      ID: "18",
      FoodNameEnglish: "Plain Greek yogurt",
      FoodNameArabic: "لبن يوناني سادة ",
      TypeID: "1",
      weight100: "100",
      Calories: "71.00",
      Protein: "9.00",
      Carbohydrates: "4.50",
      Fats: "1.50",
      DietaryFiber: "0.00"
    },
    {
      ID: "19",
      FoodNameEnglish: "Greek milk",
      FoodNameArabic: "حليب يوناني",
      TypeID: "1",
      weight100: "100",
      Calories: "87.00",
      Protein: "8.40",
      Carbohydrates: "8.80",
      Fats: "2.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "20",
      FoodNameEnglish: "Whole milk",
      FoodNameArabic: "حليب كامل الدسم",
      TypeID: "1",
      weight100: "100",
      Calories: "60.00",
      Protein: "3.00",
      Carbohydrates: "4.70",
      Fats: "3.00",
      DietaryFiber: "3.00"
    },
    {
      ID: "21",
      FoodNameEnglish: "Chicken thigh",
      FoodNameArabic: "فخذ دجاج",
      TypeID: "1",
      weight100: "100",
      Calories: "172.00",
      Protein: "29.00",
      Carbohydrates: "0.00",
      Fats: "5.60",
      DietaryFiber: "0.00"
    },
    {
      ID: "22",
      FoodNameEnglish: "Peanut butter",
      FoodNameArabic: "زبدة فول سوداني ",
      TypeID: "2",
      weight100: "100",
      Calories: "625.00",
      Protein: "21.90",
      Carbohydrates: "21.90",
      Fats: "50.00",
      DietaryFiber: "6.20"
    },
    {
      ID: "23",
      FoodNameEnglish: "Cashew",
      FoodNameArabic: "كاجو ",
      TypeID: "2",
      weight100: "100",
      Calories: "553.00",
      Protein: "18.20",
      Carbohydrates: "30.20",
      Fats: "43.80",
      DietaryFiber: "3.30"
    },
    {
      ID: "24",
      FoodNameEnglish: "Almonds",
      FoodNameArabic: "لوز",
      TypeID: "2",
      weight100: "100",
      Calories: "579.00",
      Protein: "21.20",
      Carbohydrates: "21.50",
      Fats: "49.90",
      DietaryFiber: "12.50"
    },
    {
      ID: "25",
      FoodNameEnglish: "Chickpeas",
      FoodNameArabic: "حمص",
      TypeID: "2",
      weight100: "100",
      Calories: "177.00",
      Protein: "4.90",
      Carbohydrates: "20.12",
      Fats: "8.59",
      DietaryFiber: "4.00"
    },
    {
      ID: "26",
      FoodNameEnglish: "Lentils",
      FoodNameArabic: "عدس",
      TypeID: "2",
      weight100: "100",
      Calories: "114.00",
      Protein: "9.00",
      Carbohydrates: "19.50",
      Fats: "0.40",
      DietaryFiber: "7.90"
    },
    {
      ID: "27",
      FoodNameEnglish: "Walnuts",
      FoodNameArabic: "عين جمل",
      TypeID: "2",
      weight100: "100",
      Calories: "654.00",
      Protein: "15.20",
      Carbohydrates: "13.70",
      Fats: "65.20",
      DietaryFiber: "6.70"
    },
    {
      ID: "28",
      FoodNameEnglish: "Peanuts",
      FoodNameArabic: "فول سوداني ",
      TypeID: "2",
      weight100: "100",
      Calories: "567.00",
      Protein: "25.80",
      Carbohydrates: "16.10",
      Fats: "49.20",
      DietaryFiber: "8.50"
    },
    {
      ID: "29",
      FoodNameEnglish: "Pistachios",
      FoodNameArabic: "فستق ",
      TypeID: "2",
      weight100: "100",
      Calories: "564.00",
      Protein: "21.20",
      Carbohydrates: "28.20",
      Fats: "45.90",
      DietaryFiber: "10.60"
    },
    {
      ID: "30",
      FoodNameEnglish: "Olive oil",
      FoodNameArabic: "زيت زيتون ",
      TypeID: "3",
      weight100: "100",
      Calories: "800.00",
      Protein: "0.00",
      Carbohydrates: "0.00",
      Fats: "93.30",
      DietaryFiber: "0.00"
    },
    {
      ID: "31",
      FoodNameEnglish: "Avocado",
      FoodNameArabic: "افوكادو ",
      TypeID: "3",
      weight100: "100",
      Calories: "160.00",
      Protein: "2.00",
      Carbohydrates: "8.50",
      Fats: "15.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "32",
      FoodNameEnglish: "Dark chocolate 90%",
      FoodNameArabic: "شكولاته سوداء 90% ",
      TypeID: "3",
      weight100: "100",
      Calories: "660.00",
      Protein: "10.00",
      Carbohydrates: "30.00",
      Fats: "50.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "33",
      FoodNameEnglish: "Medium egg yolk",
      FoodNameArabic: "صفار البيض متوسط ",
      TypeID: "3",
      weight100: "100",
      Calories: "322.00",
      Protein: "15.90",
      Carbohydrates: "3.60",
      Fats: "26.50",
      DietaryFiber: "0.00"
    },
    {
      ID: "34",
      FoodNameEnglish: "Boiled Basmati rice",
      FoodNameArabic: "أرز بسمتي مسلوق ",
      TypeID: "4",
      weight100: "100",
      Calories: "120.00",
      Protein: "2.00",
      Carbohydrates: "26.00",
      Fats: "0.50",
      DietaryFiber: "0.40"
    },
    {
      ID: "35",
      FoodNameEnglish: "Boiled potatoes",
      FoodNameArabic: "بطاطس مسلوقة ",
      TypeID: "4",
      weight100: "100",
      Calories: "86.00",
      Protein: "2.00",
      Carbohydrates: "22.00",
      Fats: "0.00",
      DietaryFiber: "2.00"
    },
    {
      ID: "36",
      FoodNameEnglish: "Fendal (Fennel)",
      FoodNameArabic: "فندال ",
      TypeID: "4",
      weight100: "100",
      Calories: "86.00",
      Protein: "1.50",
      Carbohydrates: "22.00",
      Fats: "0.00",
      DietaryFiber: "3.00"
    },
    {
      ID: "37",
      FoodNameEnglish: "Oats (Hana)",
      FoodNameArabic: "شوفان (هناء)",
      TypeID: "4",
      weight100: "100",
      Calories: "370.00",
      Protein: "12.10",
      Carbohydrates: "56.10",
      Fats: "8.40",
      DietaryFiber: "10.80"
    },
    {
      ID: "38",
      FoodNameEnglish: "Oats (Quaker)",
      FoodNameArabic: "شوفان (كويكر)",
      TypeID: "4",
      weight100: "100",
      Calories: "356.00",
      Protein: "11.00",
      Carbohydrates: "60.00",
      Fats: "8.00",
      DietaryFiber: "9.00"
    },
    {
      ID: "39",
      FoodNameEnglish: "Brown toast per slice (Lusine)",
      FoodNameArabic: "توست أسمر للشريحة (لوزين)",
      TypeID: "4",
      weight100: "100",
      Calories: "257.00",
      Protein: "10.00",
      Carbohydrates: "43.30",
      Fats: "4.00",
      DietaryFiber: "6.70"
    },
    {
      ID: "40",
      FoodNameEnglish: "Banana",
      FoodNameArabic: "المــوز",
      TypeID: "4",
      weight100: "100",
      Calories: "89.00",
      Protein: "1.00",
      Carbohydrates: "23.00",
      Fats: "0.00",
      DietaryFiber: "2.60"
    },
    {
      ID: "41",
      FoodNameEnglish: "Brown Lebanese bread",
      FoodNameArabic: "خبز لبناني أسمر ",
      TypeID: "4",
      weight100: "100",
      Calories: "291.00",
      Protein: "9.30",
      Carbohydrates: "59.80",
      Fats: "1.60",
      DietaryFiber: "0.00"
    },
    {
      ID: "42",
      FoodNameEnglish: "Honey",
      FoodNameArabic: "عســـل",
      TypeID: "4",
      weight100: "100",
      Calories: "406.00",
      Protein: "0.00",
      Carbohydrates: "115.00",
      Fats: "0.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "43",
      FoodNameEnglish: "Dates (Ikhlas)",
      FoodNameArabic: "تمر اخلاص",
      TypeID: "4",
      weight100: "100",
      Calories: "274.00",
      Protein: "0.00",
      Carbohydrates: "75.20",
      Fats: "0.00",
      DietaryFiber: "2.30"
    },
    {
      ID: "44",
      FoodNameEnglish: "Gatorade",
      FoodNameArabic: "جاتوريد",
      TypeID: "4",
      weight100: "100",
      Calories: "24.00",
      Protein: "0.00",
      Carbohydrates: "6.00",
      Fats: "0.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "45",
      FoodNameEnglish: "Whole wheat flour",
      FoodNameArabic: "دقيق نخالة أسمر",
      TypeID: "4",
      weight100: "100",
      Calories: "339.00",
      Protein: "14.00",
      Carbohydrates: "73.00",
      Fats: "2.00",
      DietaryFiber: "12.20"
    },
    {
      ID: "46",
      FoodNameEnglish: "Light shredded mozzarella (Al Safi)",
      FoodNameArabic: "لايت شردد موزريلا (الصافي)",
      TypeID: "5",
      weight100: "100",
      Calories: "216.00",
      Protein: "25.00",
      Carbohydrates: "2.00",
      Fats: "12.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "47",
      FoodNameEnglish: "Light shredded mozzarella (Almarai)",
      FoodNameArabic: "لايت شردد موزريلا (المراعي)  ",
      TypeID: "5",
      weight100: "100",
      Calories: "235.00",
      Protein: "24.50",
      Carbohydrates: "0.10",
      Fats: "15.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "48",
      FoodNameEnglish: "Anchor cheese jar",
      FoodNameArabic: "جبن انكر زجاج ",
      TypeID: "5",
      weight100: "100",
      Calories: "341.00",
      Protein: "8.00",
      Carbohydrates: "5.40",
      Fats: "32.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "49",
      FoodNameEnglish: "Cheese slices (La Vache Qui Rit)",
      FoodNameArabic: "جبن شرائح (لافش كرين) ",
      TypeID: "5",
      weight100: "100",
      Calories: "303.00",
      Protein: "16.00",
      Carbohydrates: "3.50",
      Fats: "25.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "50",
      FoodNameEnglish: "Light cheese slices (La Vache Qui Rit)",
      FoodNameArabic: "جبن شرائح لايت (لافاش كرين) ",
      TypeID: "5",
      weight100: "100",
      Calories: "210.00",
      Protein: "21.00",
      Carbohydrates: "4.50",
      Fats: "12.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "51",
      FoodNameEnglish: "Light cheese slices (Hesdale)",
      FoodNameArabic: "جبن شرائح لايت ( hesdale )  ",
      TypeID: "5",
      weight100: "100",
      Calories: "33.00",
      Protein: "4.00",
      Carbohydrates: "1.00",
      Fats: "2.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "52",
      FoodNameEnglish: "Cheese slices (Kraft)",
      FoodNameArabic: "جبن شرائح (كرافت)",
      TypeID: "5",
      weight100: "100",
      Calories: "42.00",
      Protein: "4.00",
      Carbohydrates: "1.00",
      Fats: "2.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "53",
      FoodNameEnglish: "Nadec cheese triangles",
      FoodNameArabic: "جبن (نادك) مثلثات ",
      TypeID: "5",
      weight100: "100",
      Calories: "36.00",
      Protein: "1.00",
      Carbohydrates: "0.00",
      Fats: "3.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "54",
      FoodNameEnglish: "Butter",
      FoodNameArabic: "زبـــدة ",
      TypeID: "5",
      weight100: "100",
      Calories: "743.00",
      Protein: "0.70",
      Carbohydrates: "0.50",
      Fats: "82.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "55",
      FoodNameEnglish: "Light cheddar cheese jar",
      FoodNameArabic: "جبن تشيدر لايت علبة",
      TypeID: "5",
      weight100: "100",
      Calories: "224.00",
      Protein: "18.20",
      Carbohydrates: "3.20",
      Fats: "15.20",
      DietaryFiber: "0.40"
    },
    {
      ID: "56",
      FoodNameEnglish: "Beans in tomato sauce (California)",
      FoodNameArabic: "فاصوليا بالطماطم (كالفورنيا) ",
      TypeID: "6",
      weight100: "100",
      Calories: "100.00",
      Protein: "4.90",
      Carbohydrates: "18.90",
      Fats: "0.50",
      DietaryFiber: "0.00"
    },
    {
      ID: "57",
      FoodNameEnglish: "Beans in tomato sauce (Mazaa)",
      FoodNameArabic: "فاصوليا بـ  الطماطم (مازا) ",
      TypeID: "6",
      weight100: "100",
      Calories: "93.00",
      Protein: "5.40",
      Carbohydrates: "14.40",
      Fats: "0.40",
      DietaryFiber: "0.00"
    },
    {
      ID: "58",
      FoodNameEnglish: "Cucumber",
      FoodNameArabic: "الخيــار",
      TypeID: "7",
      weight100: "100",
      Calories: "15.00",
      Protein: "1.00",
      Carbohydrates: "4.00",
      Fats: "0.00",
      DietaryFiber: "0.50"
    },
    {
      ID: "59",
      FoodNameEnglish: "Lettuce",
      FoodNameArabic: "الخـــس",
      TypeID: "7",
      weight100: "100",
      Calories: "17.00",
      Protein: "1.00",
      Carbohydrates: "3.00",
      Fats: "0.00",
      DietaryFiber: "2.10"
    },
    {
      ID: "60",
      FoodNameEnglish: "Tomato",
      FoodNameArabic: "الطماطم ",
      TypeID: "7",
      weight100: "100",
      Calories: "18.00",
      Protein: "1.00",
      Carbohydrates: "4.00",
      Fats: "0.00",
      DietaryFiber: "1.20"
    },
    {
      ID: "61",
      FoodNameEnglish: "Carrot",
      FoodNameArabic: "الجــزر",
      TypeID: "7",
      weight100: "100",
      Calories: "41.00",
      Protein: "1.00",
      Carbohydrates: "10.00",
      Fats: "0.00",
      DietaryFiber: "2.80"
    },
    {
      ID: "62",
      FoodNameEnglish: "Zucchini",
      FoodNameArabic: "الـكوسة ",
      TypeID: "7",
      weight100: "100",
      Calories: "21.00",
      Protein: "3.00",
      Carbohydrates: "3.00",
      Fats: "0.00",
      DietaryFiber: "1.10"
    },
    {
      ID: "63",
      FoodNameEnglish: "Cauliflower",
      FoodNameArabic: "القرنبيط ",
      TypeID: "7",
      weight100: "100",
      Calories: "23.00",
      Protein: "2.00",
      Carbohydrates: "4.00",
      Fats: "0.00",
      DietaryFiber: "2.30"
    },
    {
      ID: "64",
      FoodNameEnglish: "Broccoli",
      FoodNameArabic: "بروكلـي ",
      TypeID: "7",
      weight100: "100",
      Calories: "34.00",
      Protein: "3.00",
      Carbohydrates: "7.00",
      Fats: "0.00",
      DietaryFiber: "2.60"
    },
    {
      ID: "65",
      FoodNameEnglish: "Green pepper",
      FoodNameArabic: "الفلفل الأخضر ",
      TypeID: "7",
      weight100: "100",
      Calories: "20.00",
      Protein: "1.00",
      Carbohydrates: "5.00",
      Fats: "0.00",
      DietaryFiber: "1.70"
    },
    {
      ID: "66",
      FoodNameEnglish: "Eggplant",
      FoodNameArabic: "باذنجان ",
      TypeID: "7",
      weight100: "100",
      Calories: "50.00",
      Protein: "1.00",
      Carbohydrates: "10.00",
      Fats: "1.00",
      DietaryFiber: "2.50"
    },
    {
      ID: "67",
      FoodNameEnglish: "Garlic",
      FoodNameArabic: "الثـــوم ",
      TypeID: "7",
      weight100: "100",
      Calories: "15.00",
      Protein: "1.00",
      Carbohydrates: "3.00",
      Fats: "0.00",
      DietaryFiber: "0.20"
    },
    {
      ID: "68",
      FoodNameEnglish: "Onion",
      FoodNameArabic: "البصـل ",
      TypeID: "7",
      weight100: "100",
      Calories: "40.00",
      Protein: "1.00",
      Carbohydrates: "9.00",
      Fats: "0.00",
      DietaryFiber: "1.70"
    },
    {
      ID: "69",
      FoodNameEnglish: "Cabbage",
      FoodNameArabic: "ملفوف ",
      TypeID: "7",
      weight100: "100",
      Calories: "25.00",
      Protein: "1.00",
      Carbohydrates: "6.00",
      Fats: "0.00",
      DietaryFiber: "2.50"
    },
    {
      ID: "70",
      FoodNameEnglish: "Green beans",
      FoodNameArabic: "الفاصوليا الخضراء",
      TypeID: "7",
      weight100: "100",
      Calories: "31.00",
      Protein: "1.80",
      Carbohydrates: "7.00",
      Fats: "0.00",
      DietaryFiber: "2.70"
    },
    {
      ID: "71",
      FoodNameEnglish: "Watermelon",
      FoodNameArabic: "البطيخ ",
      TypeID: "8",
      weight100: "100",
      Calories: "30.00",
      Protein: "1.00",
      Carbohydrates: "8.00",
      Fats: "0.00",
      DietaryFiber: "0.50"
    },
    {
      ID: "72",
      FoodNameEnglish: "Apple",
      FoodNameArabic: "التفاح",
      TypeID: "8",
      weight100: "100",
      Calories: "52.00",
      Protein: "0.00",
      Carbohydrates: "14.00",
      Fats: "0.00",
      DietaryFiber: "2.40"
    },
    {
      ID: "73",
      FoodNameEnglish: "Strawberry",
      FoodNameArabic: "الفراولة ",
      TypeID: "8",
      weight100: "100",
      Calories: "32.00",
      Protein: "1.00",
      Carbohydrates: "8.00",
      Fats: "0.00",
      DietaryFiber: "2.00"
    },
    {
      ID: "74",
      FoodNameEnglish: "Grapes",
      FoodNameArabic: "العنب ",
      TypeID: "8",
      weight100: "100",
      Calories: "69.00",
      Protein: "1.00",
      Carbohydrates: "18.00",
      Fats: "0.00",
      DietaryFiber: "1.00"
    },
    {
      ID: "75",
      FoodNameEnglish: "Berries",
      FoodNameArabic: "التوت ",
      TypeID: "8",
      weight100: "100",
      Calories: "43.00",
      Protein: "1.50",
      Carbohydrates: "10.00",
      Fats: "1.00",
      DietaryFiber: "5.30"
    },
    {
      ID: "76",
      FoodNameEnglish: "Orange",
      FoodNameArabic: "البرتقال",
      TypeID: "8",
      weight100: "100",
      Calories: "49.00",
      Protein: "1.00",
      Carbohydrates: "13.00",
      Fats: "0.00",
      DietaryFiber: "2.20"
    },
    {
      ID: "77",
      FoodNameEnglish: "Lemon",
      FoodNameArabic: "ليمون",
      TypeID: "8",
      weight100: "100",
      Calories: "25.00",
      Protein: "0.00",
      Carbohydrates: "8.00",
      Fats: "0.00",
      DietaryFiber: "0.40"
    },
    {
      ID: "78",
      FoodNameEnglish: "Iso protein",
      FoodNameArabic: "ايزو بروتين ",
      TypeID: "8",
      weight100: "100",
      Calories: "120.00",
      Protein: "25.00",
      Carbohydrates: "1.00",
      Fats: "1.00",
      DietaryFiber: "0.00"
    },
    {
      ID: "79",
      FoodNameEnglish: "Casein",
      FoodNameArabic: "كازيين ",
      TypeID: "8",
      weight100: "100",
      Calories: "130.00",
      Protein: "24.00",
      Carbohydrates: "7.00",
      Fats: "1.00",
      DietaryFiber: "0.00"
    }
  ];

  var editEntryId = null; // To keep track of the item being edited

  types.forEach(function (type) {
    $("#typeDropdown").append(new Option(type.name, type.id));
    $("#newFoodType").append(new Option(type.name, type.id));
  });

  $("#typeDropdown").change(function () {
    var typeId = $(this).val();
    $("#foodDropdown").empty().append('<option value="">حدد الطعام</option>');

    var filteredFoods = foods.filter(function (food) {
      return food.TypeID == typeId;
    });

    filteredFoods.forEach(function (food) {
      $("#foodDropdown").append(new Option(food.FoodNameArabic, food.ID));
    });
  });

  $("#filterForm").submit(function (e) {
    e.preventDefault();

    var selectedFoodId = $("#foodDropdown").val();
    var weight = $("#weightInput").val();

    if (selectedFoodId && weight) {
      var selectedFood = foods.find((f) => f.ID == selectedFoodId);
      var totalCaloriesForFood = (selectedFood.Calories / 100) * weight;
      var totalProteinForFood = (selectedFood.Protein / 100) * weight;
      var totalCarbsForFood = (selectedFood.Carbohydrates / 100) * weight;
      var totalFatsForFood = (selectedFood.Fats / 100) * weight;
      var totalFiberForFood = (selectedFood.DietaryFiber / 100) * weight;

      if (editEntryId !== null) {
        // If editing an item, update its row instead of creating a new one
        var $row = $("#row-" + editEntryId);
        $row.data("calories", totalCaloriesForFood);
        $row.data("protein", totalProteinForFood);
        $row.data("carbs", totalCarbsForFood);
        $row.data("fats", totalFatsForFood);
        $row.data("fiber", totalFiberForFood);
        $row
          .find("td:first")
          .text(`${selectedFood.FoodNameArabic} - ${weight} غرام`);

        // Reset the edit state
        editEntryId = null;
      } else {
        // Add new row for the food entry
        var entryId = new Date().getTime();

        $("#foodTable tbody")
          .append(`<tr id="row-${entryId}" data-calories="${totalCaloriesForFood}" data-protein="${totalProteinForFood}" data-carbs="${totalCarbsForFood}" data-fats="${totalFatsForFood}" data-fiber="${totalFiberForFood}">
                    <td>${selectedFood.FoodNameArabic} - ${weight} غرام</td>
                    <td>
                        <button type="button" class="btn btn-warning edit-btn" data-entry-id="${entryId}">Edit</button>
                        <button type="button" class="btn btn-danger delete-btn" data-entry-id="${entryId}">Delete</button>
                    </td>
                </tr>`);
      }

      // Update totals
      updateTotals(
        totalCaloriesForFood,
        totalProteinForFood,
        totalCarbsForFood,
        totalFatsForFood,
        totalFiberForFood
      );

      // Clear form
      $("#weightInput").val("");
    }
  });

  // Function to update totals
  function updateTotals(calories, protein, carbs, fats, fiber) {
    $("#totalCalories").text(
      (parseFloat($("#totalCalories").text()) + calories).toFixed(2)
    );
    $("#totalProtein").text(
      (parseFloat($("#totalProtein").text()) + protein).toFixed(2)
    );
    $("#totalCarbs").text(
      (parseFloat($("#totalCarbs").text()) + carbs).toFixed(2)
    );
    $("#totalFats").text(
      (parseFloat($("#totalFats").text()) + fats).toFixed(2)
    );
    $("#totalDietaryFiber").text(
      (parseFloat($("#totalDietaryFiber").text()) + fiber).toFixed(2)
    );
  }

  // Function to subtract from totals
  function subtractTotals(calories, protein, carbs, fats, fiber) {
    $("#totalCalories").text(
      (parseFloat($("#totalCalories").text()) - calories).toFixed(2)
    );
    $("#totalProtein").text(
      (parseFloat($("#totalProtein").text()) - protein).toFixed(2)
    );
    $("#totalCarbs").text(
      (parseFloat($("#totalCarbs").text()) - carbs).toFixed(2)
    );
    $("#totalFats").text(
      (parseFloat($("#totalFats").text()) - fats).toFixed(2)
    );
    $("#totalDietaryFiber").text(
      (parseFloat($("#totalDietaryFiber").text()) - fiber).toFixed(2)
    );
  }

  // Handle delete button click
  $("#foodTable").on("click", ".delete-btn", function () {
    var entryId = $(this).data("entry-id");
    var $row = $("#row-" + entryId);

    // Subtract the row's nutritional values from totals
    subtractTotals(
      parseFloat($row.data("calories")),
      parseFloat($row.data("protein")),
      parseFloat($row.data("carbs")),
      parseFloat($row.data("fats")),
      parseFloat($row.data("fiber"))
    );

    $row.remove();
  });

  // Handle edit button click
  $("#foodTable").on("click", ".edit-btn", function () {
    var entryId = $(this).data("entry-id");
    var $row = $("#row-" + entryId);
    var weight = $row
      .find("td:first")
      .text()
      .split("-")[1]
      .trim()
      .replace("غرام", ""); // Extract the weight

    // Set the weight value in the modal
    $("#editWeightInput").val(weight);

    // Open the modal
    $("#editFoodModal").modal("show");

    // Track the entry being edited
    editEntryId = entryId;
  });

  // Handle the save button click in the edit modal
  $("#saveEditBtn").click(function () {
    var newWeight = $("#editWeightInput").val();

    if (newWeight && editEntryId !== null) {
      var $row = $("#row-" + editEntryId);
      var selectedFoodId = $row.data("entry-id");

      var selectedFood = foods.find((f) => f.ID == selectedFoodId);
      var totalCaloriesForFood = (selectedFood.Calories / 100) * newWeight;
      var totalProteinForFood = (selectedFood.Protein / 100) * newWeight;
      var totalCarbsForFood = (selectedFood.Carbohydrates / 100) * newWeight;
      var totalFatsForFood = (selectedFood.Fats / 100) * newWeight;
      var totalFiberForFood = (selectedFood.DietaryFiber / 100) * newWeight;

      // Update the row
      $row
        .find("td:first")
        .text(`${selectedFood.FoodNameArabic} - ${newWeight} غرام`);

      // Subtract old values from totals
      subtractTotals(
        parseFloat($row.data("calories")),
        parseFloat($row.data("protein")),
        parseFloat($row.data("carbs")),
        parseFloat($row.data("fats")),
        parseFloat($row.data("fiber"))
      );

      // Add new values to the totals
      updateTotals(
        totalCaloriesForFood,
        totalProteinForFood,
        totalCarbsForFood,
        totalFatsForFood,
        totalFiberForFood
      );

      // Update the row data attributes
      $row.data("calories", totalCaloriesForFood);
      $row.data("protein", totalProteinForFood);
      $row.data("carbs", totalCarbsForFood);
      $row.data("fats", totalFatsForFood);
      $row.data("fiber", totalFiberForFood);

      // Hide the modal
      $("#editFoodModal").modal("hide");
    }
  });

  // Save new food logic (Modal)
  $("#saveNewFoodBtn").click(function () {
    var newFoodName = $("#newFoodName").val();
    var newFoodType = $("#newFoodType").val();
    var newFoodCalories = $("#newFoodCalories").val();

    if (newFoodName && newFoodType && newFoodCalories) {
      alert("تم إضافة الطعام الجديد بنجاح!");
      $("#newFoodModal").modal("hide");
    } else {
      alert("الرجاء ملء جميع الحقول");
    }
  });
});
