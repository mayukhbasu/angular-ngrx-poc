const minAvailableDuration = (slots1 = [], slots2 = []) => {
    slots1.sort((a, b) => a[0] - b[0]);
    slots2.sort((a, b) => a[0] - b[0]);
    let index1 = 0, index2 = 0;
    while(index1 < slots1.length && index2 < slots2.length) {
        const [start1, end1] = slots1[index1];
        const [start2, end2] = slots2[index2];
        const start = Math.max(start1, start2);
        const end = Math.min(end1, end2);
        if(end - start >= duration) return [start, start + duration];
        if(end1 < end2) index1++;
        else index2++;
    }
}

const slots1 = [[10,50],[60,120],[140,210]], slots2 = [[0,15],[60,70]], duration = 8;
console.log(minAvailableDuration(slots1, slots2, duration));