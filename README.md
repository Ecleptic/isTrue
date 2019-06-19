# Is it true?

## Usage

--------------------------------------------------------------------------------

```javascript
is(1+2===3).roughly().isTrue() // true
is(1+2===3).isTrue() // true

is(1+2===9).roughly().isTrue() // false
is(1+2===9).isTrue() // false
```
