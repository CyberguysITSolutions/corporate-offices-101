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

const PaymentScreen = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [paymentDetails, setPaymentDetails] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardholderName: '',
  });

  const rentInfo = {
    monthlyRent: 2500.0,
    dueDate: 'November 1, 2025',
    unit: 'Unit 305',
    status: 'Due Soon',
  };

  const paymentHistory = [
    {
      id: 1,
      date: 'Oct 1, 2025',
      amount: 2500.0,
      method: 'Credit Card',
      status: 'Paid',
    },
    {
      id: 2,
      date: 'Sep 1, 2025',
      amount: 2500.0,
      method: 'Bank Transfer',
      status: 'Paid',
    },
    {
      id: 3,
      date: 'Aug 1, 2025',
      amount: 2500.0,
      method: 'Credit Card',
      status: 'Paid',
    },
  ];

  const handleMakePayment = () => {
    setShowPaymentModal(false);
    setPaymentDetails({
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      cardholderName: '',
    });
    // PRODUCTION NOTE: This must be replaced with a secure payment gateway integration
    // (e.g., Stripe, PayPal, Braintree) with proper:
    // - PCI DSS compliance
    // - Card validation and tokenization
    // - Secure HTTPS communication
    // - Error handling and transaction verification
    // - Receipt generation and email confirmation
    // Never store raw card details in the app or transmit them insecurely
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.content}>
        <View style={styles.rentInfoCard}>
          <Text style={styles.sectionTitle}>Current Rent Information</Text>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Unit:</Text>
            <Text style={styles.infoValue}>{rentInfo.unit}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Monthly Rent:</Text>
            <Text style={styles.amountValue}>
              ${rentInfo.monthlyRent.toFixed(2)}
            </Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Due Date:</Text>
            <Text style={styles.infoValue}>{rentInfo.dueDate}</Text>
          </View>
          <View style={styles.infoRow}>
            <Text style={styles.infoLabel}>Status:</Text>
            <View style={styles.statusBadge}>
              <Text style={styles.statusText}>{rentInfo.status}</Text>
            </View>
          </View>

          <TouchableOpacity
            style={styles.payButton}
            onPress={() => setShowPaymentModal(true)}>
            <Text style={styles.payButtonText}>Make Payment</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment History</Text>
          {paymentHistory.map((payment) => (
            <View key={payment.id} style={styles.historyCard}>
              <View style={styles.historyHeader}>
                <Text style={styles.historyDate}>{payment.date}</Text>
                <Text style={styles.historyAmount}>
                  ${payment.amount.toFixed(2)}
                </Text>
              </View>
              <View style={styles.historyDetails}>
                <Text style={styles.historyMethod}>{payment.method}</Text>
                <View style={styles.paidBadge}>
                  <Text style={styles.paidText}>{payment.status}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Payment Information</Text>
          <View style={styles.infoCard}>
            <Text style={styles.infoText}>
              • Rent is due on the 1st of each month
            </Text>
            <Text style={styles.infoText}>
              • Late fee of $50 applies after the 5th
            </Text>
            <Text style={styles.infoText}>
              • Payments can be made via credit card, debit card, or bank transfer
            </Text>
            <Text style={styles.infoText}>
              • For questions, contact property management
            </Text>
          </View>
        </View>
      </ScrollView>

      <Modal
        visible={showPaymentModal}
        animationType="slide"
        transparent={true}
        onRequestClose={() => setShowPaymentModal(false)}>
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Make Payment</Text>

            <View style={styles.paymentSummary}>
              <Text style={styles.summaryLabel}>Amount Due:</Text>
              <Text style={styles.summaryAmount}>
                ${rentInfo.monthlyRent.toFixed(2)}
              </Text>
            </View>

            <View style={styles.paymentMethodSelector}>
              <TouchableOpacity
                style={[
                  styles.methodButton,
                  paymentMethod === 'card' && styles.methodButtonActive,
                ]}
                onPress={() => setPaymentMethod('card')}>
                <Text
                  style={[
                    styles.methodButtonText,
                    paymentMethod === 'card' && styles.methodButtonTextActive,
                  ]}>
                  💳 Card
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.methodButton,
                  paymentMethod === 'bank' && styles.methodButtonActive,
                ]}
                onPress={() => setPaymentMethod('bank')}>
                <Text
                  style={[
                    styles.methodButtonText,
                    paymentMethod === 'bank' && styles.methodButtonTextActive,
                  ]}>
                  🏦 Bank Transfer
                </Text>
              </TouchableOpacity>
            </View>

            {paymentMethod === 'card' && (
              <View>
                <Text style={styles.inputLabel}>Cardholder Name</Text>
                <TextInput
                  style={styles.input}
                  placeholder="John Doe"
                  value={paymentDetails.cardholderName}
                  onChangeText={(text) =>
                    setPaymentDetails({...paymentDetails, cardholderName: text})
                  }
                />

                <Text style={styles.inputLabel}>Card Number</Text>
                <TextInput
                  style={styles.input}
                  placeholder="1234 5678 9012 3456"
                  value={paymentDetails.cardNumber}
                  onChangeText={(text) =>
                    setPaymentDetails({...paymentDetails, cardNumber: text})
                  }
                  keyboardType="numeric"
                  maxLength={19}
                />

                <View style={styles.cardDetailsRow}>
                  <View style={styles.cardDetailHalf}>
                    <Text style={styles.inputLabel}>Expiry Date</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="MM/YY"
                      value={paymentDetails.expiryDate}
                      onChangeText={(text) =>
                        setPaymentDetails({...paymentDetails, expiryDate: text})
                      }
                      keyboardType="numeric"
                      maxLength={5}
                    />
                  </View>
                  <View style={styles.cardDetailHalf}>
                    <Text style={styles.inputLabel}>CVV</Text>
                    <TextInput
                      style={styles.input}
                      placeholder="123"
                      value={paymentDetails.cvv}
                      onChangeText={(text) =>
                        setPaymentDetails({...paymentDetails, cvv: text})
                      }
                      keyboardType="numeric"
                      maxLength={4}
                      secureTextEntry
                    />
                  </View>
                </View>
              </View>
            )}

            {paymentMethod === 'bank' && (
              <View style={styles.bankTransferInfo}>
                <Text style={styles.bankInfoTitle}>Bank Transfer Details</Text>
                {/* PRODUCTION NOTE: These bank details should be fetched from a secure backend API
                    to prevent exposure in the app bundle and allow updates without app releases */}
                <Text style={styles.bankInfoText}>
                  Bank Name: First National Bank
                </Text>
                <Text style={styles.bankInfoText}>
                  Account Name: Corporate Hills Property Management
                </Text>
                <Text style={styles.bankInfoText}>
                  Account Number: 1234567890
                </Text>
                <Text style={styles.bankInfoText}>Routing Number: 987654321</Text>
                <Text style={styles.bankInfoNote}>
                  Please include your unit number in the payment reference.
                </Text>
              </View>
            )}

            <View style={styles.modalButtons}>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalCancelButton]}
                onPress={() => setShowPaymentModal(false)}>
                <Text style={styles.modalCancelButtonText}>Cancel</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.modalButton, styles.modalConfirmButton]}
                onPress={handleMakePayment}>
                <Text style={styles.modalConfirmButtonText}>
                  {paymentMethod === 'card' ? 'Pay Now' : 'Done'}
                </Text>
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
  content: {
    flex: 1,
  },
  rentInfoCard: {
    backgroundColor: '#fff',
    margin: 15,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  section: {
    backgroundColor: '#fff',
    margin: 15,
    marginTop: 0,
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#333',
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#f0f0f0',
  },
  infoLabel: {
    fontSize: 16,
    color: '#666',
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
  },
  amountValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  statusBadge: {
    backgroundColor: '#fff3cd',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  statusText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#856404',
  },
  payButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 20,
  },
  payButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  historyCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 10,
  },
  historyHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  historyDate: {
    fontSize: 14,
    color: '#666',
  },
  historyAmount: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  historyDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  historyMethod: {
    fontSize: 14,
    color: '#666',
  },
  paidBadge: {
    backgroundColor: '#e8f5e9',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 10,
  },
  paidText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#4caf50',
  },
  infoCard: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 8,
    lineHeight: 20,
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
    maxHeight: '90%',
  },
  modalTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  paymentSummary: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    padding: 15,
    borderRadius: 8,
    marginBottom: 20,
  },
  summaryLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#666',
  },
  summaryAmount: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  paymentMethodSelector: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  methodButton: {
    flex: 1,
    padding: 12,
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  methodButtonActive: {
    borderColor: '#007AFF',
    backgroundColor: '#e3f2fd',
  },
  methodButtonText: {
    fontSize: 14,
    color: '#666',
  },
  methodButtonTextActive: {
    color: '#007AFF',
    fontWeight: 'bold',
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '600',
    color: '#666',
    marginBottom: 8,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    marginBottom: 15,
  },
  cardDetailsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDetailHalf: {
    flex: 1,
    marginHorizontal: 5,
  },
  bankTransferInfo: {
    backgroundColor: '#f9f9f9',
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
  },
  bankInfoTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 10,
  },
  bankInfoText: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  bankInfoNote: {
    fontSize: 12,
    color: '#999',
    fontStyle: 'italic',
    marginTop: 10,
  },
  modalButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  modalButton: {
    flex: 1,
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 5,
  },
  modalCancelButton: {
    backgroundColor: '#f0f0f0',
  },
  modalCancelButtonText: {
    color: '#666',
    fontWeight: 'bold',
  },
  modalConfirmButton: {
    backgroundColor: '#007AFF',
  },
  modalConfirmButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default PaymentScreen;
