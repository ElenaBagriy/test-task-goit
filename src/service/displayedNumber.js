
export const displayedNumber = (number) => {
    return new Intl.NumberFormat("en-US", {
        style: "decimal",
    }).format(number);
} 