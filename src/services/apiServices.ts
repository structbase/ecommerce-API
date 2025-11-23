// fetch("https://dummyjson.com/products")
//     .then((res) => res.json())
//     .then(console.log);

export async function fetchData() {
    try {
        const response = await fetch("https://dummyjson.com/products");
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        const data = await response.json();
        console.log("-_-_-_-_-Data is received-_-_-_-_-","\n", data );
    } catch (error) {
        console.error("Fetch error:", error);
    }
}

fetchData();