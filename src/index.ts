export function sayHello({
    firstName,
    lastName,
}: {
    firstName: string;
    lastName?: string;
}) {
    if(!lastName) {
        console.log(`Hello ${firstName}!`)
    } else {
        console.log(`Hello ${firstName} ${lastName}!`)
    }
    
}