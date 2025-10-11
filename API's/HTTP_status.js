fetch("https://dummyjson.com/products/search?q=phone")
 .then(data => {
    console.log(`${data.status} ${data.statusText}`); // 200 OK
 })
 
 const urls = [
  "https://dummyjson.com/products/search?q=phone", // 200 OK
  "https://dummyjson.com/badendpoint",             // 404 Not Found
  "https://dummyjson.com/status/500",              // 500 Server Error (this may not exist, but we’ll simulate)
];

urls.forEach(async (url) => {
  try {
    const res = await fetch(url);
    console.log(`${url} → ${res.status} ${res.statusText}`);
  } catch (error) {
    console.log(`${url} → ❌ Network Error`);
  }
});





// check-statuses.js
// Node 18+ has fetch built-in. If older Node, install node-fetch or use another method.

const tests = [
  // httpbin: request exact status codes
  { url: "https://httpbin.org/status/200", method: "GET", label: "httpbin 200" },
  { url: "https://httpbin.org/status/201", method: "GET", label: "httpbin 201" },
  { url: "https://httpbin.org/status/204", method: "GET", label: "httpbin 204" },
  { url: "https://httpbin.org/status/400", method: "GET", label: "httpbin 400" },
  { url: "https://httpbin.org/status/401", method: "GET", label: "httpbin 401" },
  { url: "https://httpbin.org/status/403", method: "GET", label: "httpbin 403" },
  { url: "https://httpbin.org/status/404", method: "GET", label: "httpbin 404" },
  { url: "https://httpbin.org/status/500", method: "GET", label: "httpbin 500" },

  // reqres.in: POST to create -> 201
  { url: "https://reqres.in/api/users", method: "POST", label: "reqres POST (201)",
    body: JSON.stringify({ name: "usman", job: "tester" }),
    headers: { "Content-Type": "application/json" }
  },

  // jsonplaceholder: POST -> typically returns 201
  { url: "https://jsonplaceholder.typicode.com/posts", method: "POST", label: "jsonplaceholder POST (201)",
    body: JSON.stringify({ title: "foo", body: "bar", userId: 1 }),
    headers: { "Content-Type": "application/json; charset=UTF-8" }
  },

  // OpenWeatherMap: call a real endpoint WITHOUT an API key -> 401 Unauthorized
  { url: "https://api.openweathermap.org/data/2.5/weather?q=London", method: "GET", label: "OpenWeatherMap (no key -> 401)" },
];

async function runTests() {
  for (const t of tests) {
    try {
      const res = await fetch(t.url, {
        method: t.method,
        headers: t.headers || undefined,
        body: t.body || undefined
      });

      console.log(`${t.label}: → ${res.status} ${res.statusText}    (${t.url})`);
      // if you want response body uncomment:
      // const txt = await res.text(); console.log(" body:", txt.slice(0,200));
    } catch (err) {
      console.log(`${t.label}: → ❌ Network Error (${err.message})`);
    }
  }
}

runTests();
