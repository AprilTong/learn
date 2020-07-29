// 插入排序
// 插入排序的工作原理是通过构建有序序列，对于未排序数据，在已排序序列中从后向前扫描，找到相应位置并插入
// 时间复杂度o(n^2)
// 空间复杂度o(1)
function insertionSort(arr) {
    let n = arr.length;
    let preIndex, current;
    for (let i = 0; i < n; i++) {
        preIndex = i - 1;
        current = arr[i];
        while (preIndex > 0 && arr[preIndex] > current) {
            arr[preIndex + 1] = arr[preIndex];
            preIndex--;
        }
        arr[preIndex + 1] = current;
    }
    return arr;
}
