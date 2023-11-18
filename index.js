// solition Q1

function solution(A, K) {
    const N = A.length;

    if (N === 0) {
        return A;
    }

    const rotations = K % N;

    const rotatedArray = A.slice(N - rotations).concat(A.slice(0, N - rotations));

    return rotatedArray;
}

// solution Q2
  

function solution(A) {
    let distinctElements = new Set();
    let sum = 0;

    for (let i = 0; i < A.length; i++) {
        sum += A[i];
        if (distinctElements.has(A[i])) {
            distinctElements.delete(A[i]);
        } else {
            distinctElements.add(A[i]);
        }
    }

    return Array.from(distinctElements)[0];
}