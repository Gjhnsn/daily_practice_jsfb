export function actionRegister() {
  event.preventDefault();
  console.log(event);
  console.log("you just registered", this);
}

export function actionLogin() {
  event.preventDefault();
  console.log(event);
  console.log("you just logged in", this);
}
