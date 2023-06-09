export const FavIcon = ({ width = "w-7", height = "h-7", fill = "fill-current" }) => {
    return (
        <svg className={`${width} ${height} ${fill}`} viewBox="0 0 200 200" fill="none" stroke="none">
            <g transform="translate(0 200) scale(0.1 -0.1)">
                <path d="M563 1785 c-85 -23 -153 -63 -219 -129 -122 -122 -169 -283 -131 -446 22 -94 23 -95 92 -43 232 177 542 175 761 -4 31 -24 57 -43 59 -41 7 9 34 109 40 149 9 70 -12 175 -50 258 -96 202 -337 314 -552 256z" />
                <path d="M1205 1786 c-89 -22 -89 -23 -38 -91 177 -232 175 -542 -3 -760 -24 -30 -44 -56 -44 -58 0 -7 103 -35 151 -42 125 -16 292 46 389 144 188 192 186 487 -4 677 -122 122 -288 170 -451 130z" />
                <path d="M584 1156 c-268 -61 -437 -330 -369 -589 23 -89 62 -156 129 -223 122 -122 283 -169 446 -131 94 22 95 23 43 91 -148 197 -173 433 -69 649 19 40 54 94 77 120 23 26 40 49 38 51 -2 2 -24 11 -49 19 -69 23 -175 29 -246 13z" />
                <path d="M857 828 c-26 -86 -30 -156 -14 -234 68 -323 415 -489 701 -336 65 34 164 133 198 198 55 102 71 223 45 334 -22 94 -23 95 -92 43 -230 -176 -542 -175 -757 0 -32 26 -59 47 -61 47 -3 0 -11 -24 -20 -52z" />
            </g>
        </svg>
    );
};

export const ChileIcon = ({ width = "w-7", height = "h-7" }) => {
    return (
        <svg className={`${width} ${height}`} viewBox="0 0 6 4" fill="#fff" stroke="none">
            <path d="m0 0h6v4H0z" />
            <path fill="#0039a6" d="m0 2V0h2v3z" />
            <path fill="#d72b1f" d="m0 2h6v2H0z" />
            <path d="m1 .5.2939.9045-.7694-.559h.951l-.7694.559z" />
        </svg>
    );
};
