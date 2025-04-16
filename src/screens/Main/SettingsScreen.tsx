import React from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';
import { useAuth } from '../contexts/AuthContext';
import { useTheme } from '../contexts/ThemeContext'; // Exemplo de contexto de tema

export default function SettingsScreen() {
  const { signOut } = useAuth();
  const { darkMode, toggleDarkMode } = useTheme(); // Exemplo de toggle de tema

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Aparência</Text>
      
      <View style={styles.settingItem}>
        <Text style={styles.settingText}>Modo Escuro</Text>
        <Switch
          value={darkMode}
          onValueChange={toggleDarkMode}
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          thumbColor={darkMode ? '#6200ee' : '#f4f3f4'}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Conta</Text>
      
      <TouchableOpacity 
        style={styles.button}
        onPress={signOut}
      >
        <Text style={styles.buttonText}>Sair da Conta</Text>
      </TouchableOpacity>
      
      <Text style={styles.version}>Versão 1.0.0</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginTop: 20,
    marginBottom: 15,
    color: '#6200ee',
  },
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  settingText: {
    fontSize: 16,
    color: '#333',
  },
  button: {
    marginTop: 20,
    padding: 15,
    backgroundColor: '#ff4444',
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  version: {
    marginTop: 30,
    textAlign: 'center',
    color: '#999',
  },
});