console.log('Hello Castor');

function standard(stuff) {
  let count = 0;
  console.log(count++);
  return stuff;

  console.log(count++);

  console.log(count++);

  console.log(count++);
}

function* myAwesome(something) {
  let count = 0;
  console.log(count++);
  // yield
  yield true;
  console.log(count++);
  yield 100;
  console.log(count++);
  yield 'Myron';
  console.log(count++);
  yield [1, 2, 3];
  console.log(count++);
  yield { dude: 'car' };
  // console.log('FINAL', count++);
}

console.log(standard(2));

const doAwesome = myAwesome();

console.log(doAwesome.next());
console.log(doAwesome.next());
console.log(doAwesome.next());
console.log(doAwesome.next());
console.log(doAwesome.next());
console.log(doAwesome.next());
console.log(doAwesome.next());

function* countDown() {
  console.log('START');
  let count = 10;

  while (count < 20) {
    yield `Launching in ${count}`;
    count--;
  }
}

const newCountDown = countDown();

console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
console.log(newCountDown.next());
