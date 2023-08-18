#include "lists.h"

int main() {
    // Example usage
    dlistint_t node1 = {1, NULL, NULL};
    dlistint_t node2 = {2, NULL, NULL};
    dlistint_t node3 = {3, NULL, NULL};

    node1.next = &node2;
    node2.prev = &node1;
    node2.next = &node3;
    node3.prev = &node2;

    size_t count = print_dlistint(&node1);
    printf("Number of nodes: %zu\n", count);

    return 0;
}