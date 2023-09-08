import hashlib
import os
import binascii  # Add this line to import the 'binascii' module

def hash_password(password):
    # Create a new salt for each password (random value)
    salt = hashlib.sha256(os.urandom(60)).hexdigest().encode('ascii')
    # Use the salt to hash the password
    password_hash = hashlib.pbkdf2_hmac('sha256', password.encode('utf-8'), salt, 100000)
    # Convert the binary hash to a hexadecimal representation
    password_hash = binascii.hexlify(password_hash)
    return (salt + password_hash).decode('ascii')

# Example usage:
password = "my_secure_password"
hashed_password = hash_password(password)
print(hashed_password)

