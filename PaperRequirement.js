function paperRequirement(book1, book2, book3) {

    const pageOfBook1 = 100;
    const pageOfBook2 = 200;
    const pageOfBook3 = 300;

    let totalPageBook1 = book1 * pageOfBook1;
    let totalPageBook2 = book2 * pageOfBook2;
    let totalPageBook3 = book3 * pageOfBook3;

    let totalPage = totalPageBook1 + totalPageBook2 + totalPageBook3;

    return totalPage;

}

// let bookQuantity = [2, 3, 4];

let result = paperRequirement(2, 3, 4);

console.log(result);