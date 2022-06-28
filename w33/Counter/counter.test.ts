import test from 'tape';

import { Counter } from './counter';

test('init with 0 and add 5 is 5', t => {
  const c: Counter = new Counter();
  c.add(5);
  t.equal(c.get(), 5);
  t.end();
});

test('init with 0 and add without param is 1', t => {
  const c: Counter = new Counter();
  c.add();
  t.equal(c.get(), 1);
  t.end();
});

test('init with 0 and no add is 0', t => {
  const c: Counter = new Counter();
  t.equal(c.get(), 0);
  t.end();
});

test('init with 7 and no add is 7', t => {
  const c: Counter = new Counter(7);
  t.equal(c.get(), 7);
  t.end();
});

test('init with 0 after reset is 0', t => {
  const c: Counter = new Counter();
  c.add();
  c.reset();
  t.equal(c.get(), 0);
  t.end();
});

test('init with 5 after reset is 5', t => {
  const c: Counter = new Counter(5);
  c.add(12);
  c.reset();
  t.equal(c.get(), 5);
  t.end();
});
