# If-Else (Javascript Challenge)

This challenge is part of free internship (Fullstack Engineer) offered by [CyberDude Networks Pvt. Ltd.](https://cyberdudenetworks.com) You can find all the source code and live links below.

> Task #1: Create a if-else condition with all possible conditions.
>
> program to greet user based on current time with following condition.
>
> - IF the hour is between 0 to 12 -> print: _Good Morning_.
>
> - IF the hour is between 12 to 17 -> Print: _Good Afternoon_
>
> - IF the hour is greaterthan 17 -> Print: _Good Evening_.

```js
//get current date using date()[inbuildobject]  and assigning it to hour variable
const hour = new Date();
//get current hour using getHours() method and assigning to hrs variable
const hrs = hour.getHours();

if (hrs >= 0 && hrs < 12) {
  console.log("Good Morning");
} else if (hrs >= 12 && hrs <= 17) {
  console.log("Good Afternoon");
} else {
  console.log("Good Evening");
}
```

### Live link ->

Deploy it and put the link here.

## Acknowledgement:

- [@AnbuSelvan](https://github.com/anburocky3) | GitHub Profile.

## References:

[![If-Else-Conditional Statement](http://img.youtube.com/vi/WebG_D9-U80/0.jpg)](http://www.youtube.com/watch?v=WebG_D9-U80 "If-Else Conditional Statement")
