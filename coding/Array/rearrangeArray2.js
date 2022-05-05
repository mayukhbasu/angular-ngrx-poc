var n, i, j, p, q;
        var a = [ 1, 2, 1, 4, 5, 6, 8, 8 ];
        n = a.length;
        var b = Array(n).fill(0);
        for (i = 0; i < n; i++)
            b[i] = a[i];
 
        b.sort();
        p = 0;
        q = n - 1;
        for (i = n - 1; i >= 0; i--) {
            if (i % 2 != 0) {
                a[i] = b[q];
                q--;
            } else {
                a[i] = b[p];
                p++;
            }
        }
        for (i = 0; i < n; i++) {
            console.log(a[i] + " ");
        }