export const parseMoney = (value) => {
    return new Intl.NumberFormat('es-MX', {
        style: "currency",
        currency: "MXN"
    }).format(value)
}