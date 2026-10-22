
import { Image } from "expo-image";
import { StatusBar } from "expo-status-bar";
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const { width } = useWindowDimensions();

  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar style="light" />

      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={[
            styles.content,
            { maxWidth: Math.min(width - 40, 440) },
          ]}
        >
          <View style={styles.topBar}>
            <View style={styles.logo}>
              <Text style={styles.logoText}>MC.</Text>
            </View>

            <Text style={styles.topLabel}>MINI BIO • 2026</Text>
          </View>

          <View style={styles.profile}>
            <View style={styles.photoBorder}>
              <Image
                source={require("../../assets/images/perfil.jpg")}
                style={styles.photo}
                contentFit="contain"
                accessibilityLabel="Foto de Marcela Cantalice"
              />
            </View>

            <View style={styles.availableBadge}>
              <View style={styles.statusDot} />
              <Text style={styles.availableText}>
                PRAZER, EU SOU
              </Text>
            </View>

            <Text style={styles.firstName}>Marcela</Text>
            <Text style={styles.lastName}>Cantalice.</Text>

            <Text style={styles.subtitle}>
              Estudante de Ciência da Computação
            </Text>

            <View style={styles.divider} />
          </View>

          <View style={styles.bioCard}>
            <View style={styles.cardHeading}>
              <View style={styles.cardIcon}>
                <Text style={styles.cardIconText}>✦</Text>
              </View>

              <Text style={styles.cardTitle}>Sobre mim</Text>
            </View>

            <Text style={styles.bioText}>
              Sou estudante de Ciência da Computação na Universidade
              Católica de Pernambuco (UNICAP). Ao longo da graduação,
              venho explorando diferentes áreas da tecnologia por meio
              de projetos práticos e novas experiências. Tenho interesse
              em desenvolvimento de software, Inteligência Artificial
              e Cibersegurança, buscando sempre aprender e ampliar
              meus conhecimentos.
            </Text>
          </View>

          <View style={styles.footer}>
            <View style={styles.footerLine} />

            <Text style={styles.footerText}>
              ENTRE IDEIAS, CÓDIGOS E PROJETOS.
            </Text>

            <Text style={styles.footerSignature}>
              Construindo meu caminho na tecnologia ✦
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "#0B1020",
  },

  scrollContent: {
    flexGrow: 1,
    alignItems: "center",
    paddingTop: 20,
    paddingBottom: 40,
  },

  content: {
    width: "100%",
    flex: 1,
  },

  topBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 30,
  },

  logo: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#15162C",
    borderWidth: 1,
    borderColor: "#8B5CF6",
    alignItems: "center",
    justifyContent: "center",
  },

  logoText: {
    color: "#A78BFA",
    fontSize: 17,
    fontWeight: "800",
  },

  topLabel: {
    color: "#9CA6C0",
    fontSize: 10,
    letterSpacing: 2,
    fontWeight: "600",
  },

  profile: {
    alignItems: "center",
  },

  photoBorder: {
    width: 250,
    height: 310,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#8B5CF6",
    padding: 4,
    marginBottom: 24,
    backgroundColor: "#0B1020",
    overflow: "hidden",
  },

  photo: {
    width: "100%",
    height: "100%",
    borderRadius: 16,
  },

  availableBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: "#17182F",
    borderWidth: 1,
    borderColor: "#42305F",
    paddingHorizontal: 15,
    paddingVertical: 9,
    borderRadius: 30,
    marginBottom: 17,
  },

  statusDot: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: "#8B5CF6",
  },

  availableText: {
    color: "#C4B5FD",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 2,
  },

  firstName: {
    color: "#FFFFFF",
    fontSize: 47,
    fontWeight: "800",
    letterSpacing: -2,
    lineHeight: 55,
  },

  lastName: {
    color: "#A78BFA",
    fontSize: 47,
    fontWeight: "800",
    letterSpacing: -2,
    lineHeight: 55,
  },

  subtitle: {
    color: "#C4C9D8",
    fontSize: 14,
    textAlign: "center",
    marginTop: 13,
    lineHeight: 22,
  },

  divider: {
    width: 45,
    height: 3,
    borderRadius: 3,
    backgroundColor: "#8B5CF6",
    marginTop: 26,
    marginBottom: 28,
  },

  bioCard: {
    backgroundColor: "#11182A",
    borderRadius: 24,
    borderWidth: 1,
    borderColor: "#2A3150",
    padding: 24,
  },

  cardHeading: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    marginBottom: 17,
  },

  cardIcon: {
    width: 37,
    height: 37,
    borderRadius: 12,
    backgroundColor: "#282047",
    justifyContent: "center",
    alignItems: "center",
  },

  cardIconText: {
    color: "#A78BFA",
    fontSize: 23,
  },

  cardTitle: {
    color: "#F7F8FF",
    fontSize: 19,
    fontWeight: "700",
  },

  bioText: {
    color: "#C9D0E0",
    fontSize: 14,
    lineHeight: 25,
    textAlign: "left",
  },

  footer: {
    alignItems: "center",
    paddingTop: 32,
    paddingBottom: 12,
  },

  footerLine: {
    width: 30,
    height: 1,
    backgroundColor: "#65548A",
    marginBottom: 18,
  },

  footerText: {
    color: "#A78BFA",
    fontSize: 10,
    letterSpacing: 1.5,
    fontWeight: "700",
    textAlign: "center",
  },

  footerSignature: {
    color: "#949CB5",
    fontSize: 11,
    textAlign: "center",
    marginTop: 8,
  },
});
