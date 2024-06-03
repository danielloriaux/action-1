type Input = {
    inA: string;
    inB: string;
}

type Output = {
    out: string
}

export function main(input: Input): Output {
    console.log('inA', input.inA);
    console.log('inB', input.inB);
    const result = {
        out: input.inA + input.inB
    }
    console.log('out', result.out);
    return result;
}