export default function useFormUtilities() {
    const getImageClasses = (isSelected) => {
        let basesClasses = "w-20 dib glow ";

        if (isSelected) {
            return basesClasses + "o-100";
        }

        return basesClasses + "o-50";
    };

    return {
        getImageClasses
    }
}