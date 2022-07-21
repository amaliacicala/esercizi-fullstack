const percentage = (num, pct) => {
    const total = ((num / 100) * pct).toFixed(2);

    console.log(`The ${pct}% of ${num} is ${total}`)
}

export default percentage;
