import("./index.scss")
console.log("hello world");

if (process.env.NODE_ENV == "development") {
  console.log('base is localhost');
} else {
  console.log("base is imooc.com");
}