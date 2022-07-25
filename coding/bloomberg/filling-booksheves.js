var minHeightShelves = function(books, shelfW) {
    var memo = {};
  
    var minHeight = (i, currentH, remainW) => {
      let testHeight;
      if (i === books.length) return currentH;
      var hash = i*1000 + remainW;
      if (memo[hash]) return memo[hash];
      var [newW, newH] = books[i];
      let updatedHeight = currentH + minHeight(i+1, newH, shelfW - newW);
      if(newW > remainW){
         testHeight = Infinity;
      } else {
        testHeight = minHeight(i+1, Math.max(currentH, newH), remainW - newW)
      }
      memo[hash] = Math.min(
        // Starting a new shelf with the new book
        updatedHeight,
        // Continuing the current shelf with the new book
        testHeight
          
      );
      
      return memo[hash];
    };
    
    return minHeight(0, 0, shelfW);
  };

  books = [[1,3],[2,4],[3,2]], shelf_width = 6;
  console.log(minHeightShelves(books, shelf_width));