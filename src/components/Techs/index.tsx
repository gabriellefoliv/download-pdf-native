import { Image, View } from "react-native";
import { TECHS } from "../../utils/techs";
import { styles } from "./styles";
import { Marquee } from "@animatereactnative/marquee"; // npx expo install react-native-reanimated (to work)
                                                       // babel.config.js ++ plugin



export function Techs() {
    return (
        <Marquee speed={0.7} spacing={10}>
            <View style={styles.container}>
                {TECHS.map((tech) => (
                    <Image key={tech.id} source={tech.img} style={styles.tech} />
                ))}
            </View>
        </Marquee>

    )
}