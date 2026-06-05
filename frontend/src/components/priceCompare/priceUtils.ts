export const formatWon = (value: number) => `${value.toLocaleString("ko-KR")}원`;

export const formatShippingFee = (value: number) => (value === 0 ? "무료" : formatWon(value));
