import { StyleSheet } from "react-native";

export const loginStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    marginBottom: 40,
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#2563EB",
    padding: 15,
    borderRadius: 10,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  signUpChange: {
    marginTop: 10,
    gap: 10,
    alignItems: "center",
  },
});

export const productStyles = StyleSheet.create({
  title: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
  productCard: {
    gap: 20,
    backgroundColor: "white",
    boxShadow: "0 2px 15px rgba(0, 0, 0, 0.05)",
    padding: 20,
    borderRadius: 10,
  },
  buttonRemove: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 10,
  },
});

export const sharedStyles = StyleSheet.create({
  button: {
    marginInline: "auto",
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 10,
    backgroundColor: "purple",
    width: "50%",
    borderRadius: 20,
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
});
