package com.project.restaurant.dto;

import com.project.restaurant.util.enums.OrderStatus;
import com.project.restaurant.util.enums.PaymentStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.boot.autoconfigure.AutoConfigureOrder;
import org.springframework.jmx.export.annotation.ManagedNotifications;

import java.sql.Timestamp;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class OrderDTO {
    private Long id;
    private Long customerId;
    private Long restaurantId;
    private Timestamp orderTime;
    private int estimatedDeliveryTime;
    private OrderStatus orderStatus;
    private double totalAmount;
    private PaymentStatus paymentStatus;
    private String remarks;
}
