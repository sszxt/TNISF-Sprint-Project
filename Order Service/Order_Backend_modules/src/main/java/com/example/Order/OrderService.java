package com.example.Order;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.example.Order.Order;
import com.example.Order.OrderRepository;

@Service
public class OrderService {
	@Autowired
    private OrderRepository orderRepository;

    
    public List<Order> getAllOrders() {
        return orderRepository.findAll();
    }

   
    public Order getOrderById(int id) {
        Optional<Order> order = orderRepository.findById(id);
        return order.orElse(null);
    }

  
    public Order addOrder(Order order) {
        return orderRepository.save(order);
    }

  
    public Order updateOrder(int id, Order order) {
        if (orderRepository.existsById(id)) {
            order.setOrderId(id);
            return orderRepository.save(order);
        }
        return null;
    }

  
    public void deleteOrder(int id) {
        orderRepository.deleteById(id);
    }
}
