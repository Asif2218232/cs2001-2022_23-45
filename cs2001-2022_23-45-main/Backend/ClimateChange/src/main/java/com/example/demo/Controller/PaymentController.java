package com.example.demo.Controller;

import com.example.demo.Model.Payment;
import com.example.demo.Service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class PaymentController {

    PaymentService paymentService;

    @Autowired
    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping("/save/payment")
    public ResponseEntity<?> savePayment(@Valid @RequestBody Payment payment) {
        return paymentService.savePayment(payment);
    }
}
