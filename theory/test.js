function scope() {
    scope = 20;

    console.log("scope = ", scope);
}

function scope1() {
    console.log("scope = ", scope);
}

scope();
scope1();