$(function(){
        $('summary').show();
        $('.cdata-overlay').hide();
    //Get inputs
$("#checkout").click(function () {
    let flavour = $(".flavour option:selected").val();
    let size = $("#size option:selected").val();
    let crust = $("#crust option:selected").val();
    let topping = $("#toppings option:selected").val();
    let number = $("#number").val();
    console.log(size);
    

    //Function order
    let order = (f, s, c, t, n, total) => {
    return {f, s, c, t, n, total};
    };

    //check price
    let price, totalPrice;
    switch (flavour) {
    case flavour = "club":
    switch (size) {
    case size = "small":
    price = 650;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 800;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Meaty":
    switch (size) {
    case size = "small":
    price = 650;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 800;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Beef steak":
    switch (size) {
    case size = "small":
    price = 550;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 800;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Hawaiian":
    switch (size) {
    case size = "small":
    price = 550;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 700;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Four Seasons":
    switch (size) {
    case size = "small":
    price = 550;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 700;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Tikka chicken":
    switch (size) {
    case size = "small":
    price = 650;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 800;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Chicken Mushroom":
    switch (size) {
    case size = "small":
    price = 650;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 800;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "BBQ Chicken":
    switch (size) {
    case size = "small":
    price = 550;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 800;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Peri-peri Chicken":
    switch (size) {
    case size = "small":
    price = 550;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 700;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
    totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
    totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
    totalPrice = (price * number) + 100;
    } else {
    totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Sweet & Sour Chicken":
    switch (size) {
    case size = "small":
    price = 500;
    if (crust === "thin crust") {
        totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
        totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
        totalPrice = (price * number) + 100;
    } else {
        totalPrice = (price * number) + 250;
    }
    break;
    case size = "medium":
    price = 700;
    if (crust === "thin crust") {
        totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
        totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
        totalPrice = (price * number) + 100;
    } else {
        totalPrice = (price * number) + 250;
    }
    break;
    case size = "large":
    price = 1150;
    if (crust === "thin crust") {
        totalPrice = (price * number) + 100;
    } else if (crust === "thick crust") {
        totalPrice = (price * number) + 150;
    } else if (crust === "flatbread crust") {
        totalPrice = (price * number) + 100;
    } else {
        totalPrice = (price * number) + 250;
    }
    break;
    }
    break;
    case flavour = "Seasonal Veggie":
    switch (size) {
    case size = "small":
        price = 650;
        if (crust === "thin crust") {
            totalPrice = (price * number) + 100;
        } else if (crust === "thick crust") {
            totalPrice = (price * number) + 150;
        } else if (crust === "flatbread crust") {
            totalPrice = (price * number) + 100;
        } else {
            totalPrice = (price * number) + 250;
        }
        break;
    case size = "medium":
        price = 800;
        if (crust === "thin crust") {
            totalPrice = (price * number) + 100;
        } else if (crust === "thick crust") {
            totalPrice = (price * number) + 150;
        } else if (crust === "flatbread crust") {
            totalPrice = (price * number) + 100;
        } else {
            totalPrice = (price * number) + 250;
        }
        break;
    case size = "large":
        price = 1150;
        if (crust === "thin crust") {
            totalPrice = (price * number) + 100;
        } else if (crust === "thick crust") {
            totalPrice = (price * number) + 150;
        } else if (crust === "flatbread crust") {
            totalPrice = (price * number) + 100;
        } else {
            totalPrice = (price * number) + 250;
        }
        break;
    }
    break;
    case flavour = "Cheese":
    switch (size) {
        case size = "small":
            price = 650;
            if (crust === "thin crust") {
                totalPrice = (price * number) + 100;
            } else if (crust === "thick crust") {
                totalPrice = (price * number) + 150;
            } else if (crust === "flatbread crust") {
                totalPrice = (price * number) + 100;
            } else {
                totalPrice = (price * number) + 250;
            }
            break;
        case size = "medium":
            price = 800;
            if (crust === "thin crust") {
                totalPrice = (price * number) + 100;
            } else if (crust === "thick crust") {
                totalPrice = (price * number) + 150;
            } else if (crust === "flatbread crust") {
                totalPrice = (price * number) + 100;
            } else {
                totalPrice = (price * number) + 250;
            }
            break;
        case size = "large":
            price = 1150;
            if (crust === "thin crust") {
                totalPrice = (price * number) + 100;
            } else if (crust === "thick crust") {
                totalPrice = (price * number) + 150;
            } else if (crust === "flatbread crust") {
                totalPrice = (price * number) + 100;
            } else {
                totalPrice = (price * number) + 250;
            }
            break;
    }
    break;
    case flavour = "Red Hot veggie":
        switch (size) {
            case size = "small":
                price = 550;
                if (crust === "thin crust") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick crust") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread crust") {
                    totalPrice = (price * number) + 100;
                } else {
                    totalPrice = (price * number) + 250;
                }
                break;
            case size = "medium":
                price = 800;
                if (crust === "thin crust") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick crust") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread crust") {
                    totalPrice = (price * number) + 100;
                } else {
                    totalPrice = (price * number) + 250;
                }
                break;
            case size = "large":
                price = 1150;
                if (crust === "thin crust") {
                    totalPrice = (price * number) + 100;
                } else if (crust === "thick crust") {
                    totalPrice = (price * number) + 150;
                } else if (crust === "flatbread crust") {
                    totalPrice = (price * number) + 100;
                } else {
                    totalPrice = (price * number) + 250;
                }
                break;
        }
        break;
        switch (topping) {
            case topping = "tomato":
                totalPrice = totalPrice + 70;
                break;
            case topping = "onions":
                totalPrice = totalPrice + 70;
                break;
            case topping = "mushroom":
                totalPrice = totalPrice + 70;
                break;
            case topping = "greenpepper":
                totalPrice = totalPrice + 60;
                break;
            case topping = "pineapple":
                totalPrice = totalPrice + 50;
                break;
            case topping = "sweetcorn":
                totalPrice = totalPrice + 50;
                break;
            case topping = "macon":
                totalPrice = totalPrice + 100;
                break;
            case topping = "mince":
                totalPrice = totalPrice + 100;
                break;
            case topping = "beef Peperoni":
                totalPrice = totalPrice + 120;
                break;
            case topping = "Peri-peri chicken":
                totalPrice = totalPrice + 120;
                break;

        }    
        

        
