import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
} from 'react-native';

const CommunicationScreen = () => {
  const [selectedTab, setSelectedTab] = useState('tenants');
  const [showComposeModal, setShowComposeModal] = useState(false);
  const [newMessage, setNewMessage] = useState({
    recipient: '',
    subject: '',
    message: '',
  });

  const tenantMessages = [
    {
      id: 1,
      sender: 'Unit 305',
      subject: 'Noise Complaint',
      preview: 'There has been excessive noise from the unit above...',
      date: 'Oct 25, 2025',
      unread: true,
    },
    {
      id: 2,
      sender: 'Unit 210',
      subject: 'Parking Space Issue',
      preview: 'My assigned parking space has been occupied...',
      date: 'Oct 24, 2025',
      unread: false,
    },
    {
      id: 3,
      sender: 'Unit 402',
      subject: 'Thank You',
      preview: 'Thank you for the quick response to my maintenance request...',
      date: 'Oct 23, 2025',
      unread: false,
    },
  ];

  const managementMessages = [
    {
      id: 1,
      sender: 'Property Management',
      subject: 'Monthly Newsletter',
      preview: 'Please find attached our monthly newsletter with important updates...',
      date: 'Oct 26, 2025',
      unread: true,
    },
    {
      id: 2,
      sender: 'Maintenance Team',
      subject: 'Work Order Completed',
      preview: 'Your maintenance request #12345 has been completed...',
      date: 'Oct 25, 2025',
      unread: false,
    },
    {
      id: 3,
      sender: 'Property Management',
      subject: 'Rent Reminder',
      preview: 'This is a friendly reminder that rent is due on the 1st...',
      date: 'Oct 22, 2025',
      unread: false,
    },
  ];

  const messages = selectedTab === 'tenants' ? tenantMessages : managementMessages;

  const handleComposeMessage = () => {
    setShowComposeModal(false);
    setNewMessage({recipient: '', subject: '', message: ''});
    // In a real app, this would send the message to the backend
  };

  return (
    <View style={styles.container}>
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'tenants' && styles.activeTab]}
          onPress={() => setSelectedTab('tenants')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'tenants' && styles.activeTabText,
            ]}>
            Tenants
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.tab, selectedTab === 'management' && styles.activeTab]}
          onPress={() => setSelectedTab('management')}>
          <Text
            style={[
              styles.tabText,
              selectedTab === 'management' && styles.activeTabText,
            ]}>
            Property Management
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.messageList}>
        {messages.map((message) => (
          <TouchableOpacity key={message.id} style={styles.messageCard}>
            <View style={styles.messageHeader}>
              <Text style={styles.messageSender}>{message.sender}</Text>
              <Text style={styles.messageDate}>{message.date}</Text>
            </View>
            <Text style={styles.messageSubject}>
              {message.unread && <Text style={styles.unreadDot}>● </Text>}
              {message.subject}
            </Text>
            <Text style={styles.messagePreview}>{message.preview}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <TouchableOpacity
        style={styles.composeButton}
        onPress={() => setShowComposeModal(true)}>
        <Text style={styles.composeButtonText}>✉️ New Message</Text>
      </TouchableOpacity>

      <Modal
        visible={showComposeModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowComposeModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Compose Message</Text>

            <TextInput
              style={styles.input}
              placeholder="To: (e.g., Property Management, Unit 305)"
              value={newMessage.recipient}
              onChangeText={(text) =>
                setNewMessage({...newMessage, recipient: text})
              }
            />

            <TextInput
              style={styles.input}
              placeholder="Subject"
              value={newMessage.subject}
              onChangeText={(text) =>
                setNewMessage({...newMessage, subject: text})
              }
            />

            <TextInput
              style={[styles.input, styles.messageInput]}
              placeholder="Type your message here..."
              value={newMessage.message}
              onChangeText={(text) =>
                setNewMessage({...newMessage, message: text})
              }
              multiline
              numberOfLines={6}
            />

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.cancelButton]}
                onPress={() => setShowComposeModal(false)}>
                <Text style={styles.cancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.sendButton]}
                onPress={handleComposeMessage}>
                <Text style={styles.sendButtonText}>Send</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: 'transparent',
  },
  activeTab: {
    borderBottomColor: '#007AFF',
  },
  tabText: {
    fontSize: 16,
    color: '#666',
  },
  activeTabText: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  messageList: {
    flex: 1,
  },
  messageCard: {
    backgroundColor: '#fff',
    padding: 15,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  messageHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  messageSender: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  messageDate: {
    fontSize: 12,
    color: '#999',
  },
  messageSubject: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 5,
  },
  unreadDot: {
    color: '#007AFF',
  },
  messagePreview: {
    fontSize: 14,
    color: '#666',
  },
  composeButton: {
    backgroundColor: '#007AFF',
    margin: 15,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  composeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    width: '90%',
    maxHeight: '80%',
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    marginBottom: 15,
    fontSize: 16,
  },
  messageInput: {
    height: 120,
    textAlignVertical: 'top',
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cancelButton: {
    backgroundColor: '#f0f0f0',
  },
  cancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  sendButton: {
    backgroundColor: '#007AFF',
  },
  sendButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default CommunicationScreen;
