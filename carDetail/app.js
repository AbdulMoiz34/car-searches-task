const carsData = {
    Toyota: {
        corolla: {
            name: "Corolla Altis X",
            price: "Rs 5,969,000",
            year: 2025,
            engine: "1600 cc",
            features: {
                "Airbags": 2,
                "Seatbelts": 5,
                "Passenger Seat Belt Warning": "❌",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "❌"
            },
            colors: ["blue", "red", "black"],
            picture: {
                default: "https://images.pexels.com/photos/170811/pexels-photo-170811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://cache4.pakwheels.com/ad_pictures/9445/toyota-corolla-altis-x-automatic-1-6-2021-94453194.jpg"
            },
        },
        landCruiser: {
            name: "Land Cruiser 300",
            price: "Rs 80,000,000",
            year: 2025,
            engine: "3.5L V6 Twin-Turbo",
            features: {
                "Airbags": 8,
                "Seatbelts": 7,
                "Passenger Seat Belt Warning": "✅",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            picture: {
                default: "https://cdn.motor1.com/images/mgl/wlp9wV/s1/toyota-land-cruiser-70-series-humanitarian-efforts.webp",
                red: "https://files.toyota.com.bh/s3fs-public/2021-06/3Q3%20Dark%20Red%20Mica%20Metallic_1.png?VersionId=ok_K1Xbz1.cB.JaTbgHwnKHG8EH1z0tw",
                black: "https://landcruiserprado.com/wp-content/uploads/823993.jpg"

            },
            colors: ["white", "black", "red"]
        },
        fortuner: {
            name: "Fortuner Legender",
            price: "Rs 21,089,000",
            year: 2025,
            engine: "2.8L Diesel Turbo",
            features: {
                "Airbags": 6,
                "Seatbelts": 7,
                "Passenger Seat Belt Warning": "✅",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["White", "Black", "Grey"],
            picture: {
                default: "https://www.toyota-central.com/Assets/images/Vehicle/FortunerLegender/Color/218-attitude-black.png",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    Honda: {
        civic: {
            name: "Honda Civic RS",
            price: "Rs 8,100,000",
            year: 2025,
            engine: "1.5L VTEC Turbo",
            features: {
                "Airbags": 6,
                "Seatbelts": 5,
                "Passenger Seat Belt Warning": "✅",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Red", "Black", "White", "Silver"],
            picture: {
                default: "https://cdn.motor1.com/images/mgl/vxZ1mG/s1/2025-honda-civic-rs-jdm.jpg",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        },
        accord: {
            name: "Honda Accord Hybrid",
            price: "Rs 14,500,000",
            year: 2025,
            engine: "2.0L Hybrid",
            features: {
                "Airbags": 6,
                "Seatbelts": 5,
                "Passenger Seat Belt Warning": "✅",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Black", "White", "Grey"],
            picture: {
                default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpD_TOopT4tE57Q_zqfqVjjc50RvjGfv6RBw&s",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    BMW: {
        series3: {
            name: "BMW 3 Series",
            price: "Rs 19,500,000",
            year: 2025,
            engine: "2.0L TwinPower Turbo",
            features: {
                "Airbags": 6,
                "Seatbelts": 5,
                "Passenger Seat Belt Warning": "✅",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Blue", "Black", "White"],
            picture: {
                default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQDEhwZOMwGuDp41SVTCWjSADxjw318UtuDOA&s",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        },
        series7: {
            name: "BMW 7 Series",
            price: "Rs 40,000,000",
            year: 2025,
            engine: "3.0L TwinPower Turbo",
            features: {
                "Airbags": 10,
                "Seatbelts": 5,
                "Passenger Seat Belt Warning": "✅",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "✅",
                "Auto Parking": "✅"
            },
            colors: ["Black", "White", "Grey"],
            picture: {
                default: "https://www.bmw.in/content/dam/bmw/common/topics/offers-and-services/bmw-special-sales-2020/protection-vehicle/bmw-css-7-series-protection-ms-new-standard.jpg",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    Mercedes: {
        eClass: {
            name: "Mercedes-Benz E-Class",
            price: "Rs 23,500,000",
            year: 2025,
            engine: "2.0L Turbo",
            features: {
                "Airbags": 8,
                "Seatbelts": 5,
                "Passenger Seat Belt Warning": "✅",
                "Child Lock": "✅",
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Silver", "Black", "White"],
            picture: {
                default: "https://www.topgear.com/sites/default/files/2023/12/1%20Mercedes%20E-Class%20review.jpg",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    Tesla: {
        modelS: {
            name: "Tesla Model S",
            price: "Rs 25,000,000",
            year: 2025,
            engine: "Electric Dual Motor",
            features: {
                "Autopilot": "✅",
                "Airbags": 8,
                "Seatbelts": 5,
                "Sunroof": "✅",
                "Self-Driving": "✅"
            },
            colors: ["Red", "Black", "White"],
            picture: {
                default: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/2018_Tesla_Model_S_75D.jpg/1200px-2018_Tesla_Model_S_75D.jpg",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        },
        modelX: {
            name: "Tesla Model X",
            price: "Rs 30,000,000",
            year: 2025,
            engine: "Electric Dual Motor",
            features: {
                "Autopilot": "✅",
                "Airbags": 8,
                "Seatbelts": 7,
                "Sunroof": "✅",
                "Self-Driving": "✅"
            },
            colors: ["White", "Black", "Blue"],
            picture: {
                default: "https://images.prismic.io/carwow/c340a77d-af56-4562-abfb-bd5518ccb292_2023+Tesla+Model+X+front+quarter+moving.jpg",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    Ford: {
        mustang: {
            name: "Ford Mustang GT",
            price: "Rs 18,500,000",
            year: 2025,
            engine: "5.0L V8",
            features: {
                "Airbags": 6,
                "Seatbelts": 4,
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Yellow", "Red", "Black"],
            picture: {
                default: "https://hips.hearstapps.com/hmg-prod/images/2019-ford-mustang-shelby-gt-s-lead2-1566224220.jpg",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    Audi: {
        a6: {
            name: "Audi A6",
            price: "Rs 19,500,000",
            year: 2025,
            engine: "2.0L Turbo",
            features: {
                "Airbags": 6,
                "Seatbelts": 5,
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Black", "White", "Grey"],
            picture: {
                default: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoiJg4ZpF3F8Di73_nD7ITHkdsH5NBjREQew&s",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    Nissan: {
        gtr: {
            name: "Nissan GT-R",
            price: "Rs 50,000,000",
            year: 2025,
            engine: "3.8L Twin-Turbo V6",
            features: {
                "Airbags": 6,
                "Seatbelts": 4,
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Red", "Black", "Silver"],
            picture: {
                default: "https://wieck-nissanao-production.s3.us-west-1.amazonaws.com/releaseInlineImages/fd1297096bc4d29f80c620d3af19336327b241cd",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    },
    Hyundai: {
        tucson: {
            name: "Hyundai Tucson",
            price: "Rs 8,200,000",
            year: 2025,
            engine: "2.0L Petrol",
            features: {
                "Airbags": 6,
                "Seatbelts": 5,
                "ABS Brakes": "✅",
                "Sunroof": "✅"
            },
            colors: ["Blue", "White", "Black"],
            picture: {
                default: "https://upload.wikimedia.org/wikipedia/commons/5/53/Hyundai_Tucson_%28NX4%2C_SWB%29_PHEV_1X7A1858.jpg",
                red: "https://images.pexels.com/photos/210019/pexels-photo-210019.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
                black: "https://images.pexels.com/photos/919073/pexels-photo-919073.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"

            },
        }
    }
};

function getModel() {
    const params = new URLSearchParams(window.location.search)
    const brand = params.get("brand");
    const model = params.get("model");
    return carsData[brand][model];
}
const carDetails = getModel();
// change website title
document.querySelector("title").textContent = carDetails.name;

function displayCarDetails(car) {
    // Update Basic Information
    const carImage = document.getElementById("carImage");
    const colorSelector = document.querySelector(".color-selector");
    const featuresList = document.getElementById("featuresList");
    carImage.src = car.picture.default;
    document.getElementById("carPrice").textContent = car.price;
    document.getElementById("carName").textContent = car.name;;
    document.getElementById("carYear").textContent = car.year;
    document.getElementById("carEngine").textContent = car.engine;

    // car color selector
    colorSelector.innerHTML = "";
    car.colors.forEach(color => {
        colorSelector.innerHTML += `<div class="color-option" data-color="${color}" title="${color}" style="background-color: ${color}"></div`;
    })
    const colorOptions = document.querySelectorAll(".color-option");
    colorOptions[0].classList.add("active");

    // car color click handler
    colorOptions.forEach(el => el.addEventListener("click", () => {
        colorOptions.forEach(el => el.classList.remove("active"));
        el.classList.add("remove");
        const selectedColor = el.getAttribute("data-color");
        const pic = car.picture[selectedColor] ?? car.picture.default;
        console.log(pic);
        carImage.src = pic;
        carImage.style.opacity = 0;
        setTimeout(() => carImage.style.opacity = 1, 300);
    }));
    // console.log(colorOptions);

    // features of car
    featuresList.innerHTML = "";
    const carFeaturesInArr = Object.entries(car.features);
    console.log(carFeaturesInArr);

    for (let [feature, value] of carFeaturesInArr) {
        let iconClass = "";
        switch (feature.toLowerCase()) {
            case 'airbags':
                iconClass = 'fas fa-car-burst';
                break;
            case 'seatbelts':
                iconClass = 'fas fa-user-shield';
                break;
            case 'sunroof':
                iconClass = 'fas fa-sun';
                break;
            case 'abs brakes':
                iconClass = 'fas fa-brake-warning';
                break;
            case 'child lock':
                iconClass = 'fas fa-lock';
                break;
            case 'autopilot':
                iconClass = 'fas fa-robot';
                break;
            case 'self-driving':
                iconClass = 'fas fa-car';
                break;
            default:
                iconClass = 'fas fa-check-circle';
        }
        let iconColor = (value === "❌") ? "var(--bs-danger)" : "var(--bs-success)";
        if (typeof value === "number") {
            console.log("test");
            featuresList.innerHTML += `<div class="feature-item"><i class="fas ${iconClass}" style="color: ${iconColor}"></i><span>${feature}: ${value}</span></div>`;
        } else {
            console.log("test");
            featuresList.innerHTML += `<div class="feature-item"><i class="fas ${iconClass}" style="color: ${iconColor}"></i><span>${feature}</span></div>`;
        }
    }
}

displayCarDetails(carDetails);