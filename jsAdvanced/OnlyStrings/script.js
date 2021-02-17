describe('onlyStrings', function(){
  it('returns an array', function(){
    expect(onlyStrings([1, 2, 3])).toEqual(jasmine.any(Array));
  });

  it('does not change arrays of strings', function(){
    expect(onlyStrings(['a', 'b', 'c'])).toEqual(['a', 'b', 'c']);
  });

  it('removes non-string primitives from an array', function(){
    expect(onlyStrings([1, 'hi', null, 'cool', undefined, 'ok', false])).toEqual(
      ['hi', 'cool', 'ok']
    );
  });

  it('removes reference type from an array', function(){
    expect(onlyStrings([{}, 'a', [], 'b', function(){}, 'c'])).toEqual(
      ['a','b', 'c']
    );
  });
});

// Old
// function onlyStrings(arr)
// {
//   let strings = [];
//   for (let i = 0;   < arr.length; i++)
//   {
//     if(typeof arr[i] === 'string') strings.push(arr[i]);
//   }
//   return strings;
// }

// Refatorada
function onlyStrings(arr)
{
  return arr.filter(function(el) { return typeof el === 'string';});
}