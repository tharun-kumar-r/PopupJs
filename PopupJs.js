class PopupJs {
    constructor() {
        this.popupJsModal();
    }
    popupJsModal() {
        this.modal = document.createElement("div");
        const style = document.createElement("style");
        style.innerHTML = ` @media (max-width: 600px) { .model-box {width: 350px !important;}}`;
        document.head.appendChild(style);
        Object.assign(this.modal.style, { display: "none", position: "fixed", top: "0", left: "0", width: "100%", height: "100%", background: "rgba(0, 0, 0, 0.5)", justifyContent: "center", alignItems: "center", zIndex: "1000" });
        this.modal.innerHTML = `<div class="model-box" style="background: white; border-radius: 4px; text-align: left; width: 400px; box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); position: relative;">
        <span style="position: absolute; margin-top: 13px; right: 11px; font-size: 23px; cursor: pointer;" class="popupjs-modal-close"><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="15" height="15" viewBox="0 0 24 24">
        <path d="M 4.7070312 3.2929688 L 3.2929688 4.7070312 L 10.585938 12 L 3.2929688 19.292969 L 4.7070312 20.707031 L 12 13.414062 L 19.292969 20.707031 L 20.707031 19.292969 L 13.414062 12 L 20.707031 4.7070312 L 19.292969 3.2929688 L 12 10.585938 L 4.7070312 3.2929688 z"></path>
        </svg></span>
        <span style='position: absolute; top: 12px; left: 15px; font-size: 16px;'class="popupjs-modal-title"></span>
        <div style="display: flex ; align-items: center; gap: 10px; padding: 20px; margin-top: 30px;" class="popupjs-modal-body">
        <div style="margin-top:5px" class="popupjs-modal-icon"></div>
        <div class="popupjs-modal-message"></div>
        </div>
        <div style="padding: 10px; background:#f2f2f2;border-top:1px solid #e2e2e2; text-align: right; border-bottom-left-radius: 3px; border-bottom-right-radius: 3px;">
        <button class="btn btn-primary border-0 pb-1 pt-1 confirm-btn">Ok</button>
        <button class="btn pb-1 pt-1 cancel-btn">Cancel</button>
        </div>
        </div>`;
        document.body.appendChild(this.modal);
        this.closeBtn = this.modal.querySelector(".popupjs-modal-close");
        this.confirmBtn = this.modal.querySelector(".confirm-btn");
        this.cancelBtn = this.modal.querySelector(".cancel-btn");

        this.closeBtn.addEventListener("click", () => this.close());
        this.cancelBtn.addEventListener("click", () => this.close());
        window.addEventListener("keydown", (e) => { if (e.key === "Escape") this.close(); });
    }

    show({ title, message, type = "info", showCancel = false, onConfirm = null }) {
        this.modal.querySelector(".popupjs-modal-title").innerHTML = `${title}`;
        this.modal.querySelector(".popupjs-modal-message").innerHTML = `<p style="margin:0px;padding:0px">${message}</p>`;
        this.modal.querySelector(".popupjs-modal-icon").innerHTML = this.getIcon(type);
        this.modal.style.display = "flex";

        if (showCancel) {
            this.cancelBtn.style.display = "inline-block";
        } else {
            this.cancelBtn.style.display = "none";
        }

        this.confirmBtn.onclick = () => {
            if (onConfirm) onConfirm();
            this.close();
        };
    }

    close() {
        this.modal.style.display = "none";
    }

    getIcon(type) {
        const icons = {
            success: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC+klEQVR4nM1Xu08UcRBe39ipidpofBU2djQUcDMLSoigNO7MBjVYEBIbE7Wg01ZE+BNUDGiCIcYXoIGbOTiobDQWoNHeQjGRGK0ws3uGO27vbo89E79kk8v+Ht/M7DePc5z/HQ0L3s6U0hkQvgNCoyCcCR8aRaUBEO4A6a6rGWHLXNdRVHoASisg/BWVx0BoEMS/Gj40iEqPUehbbs/9pox3ZMOEbRNtO1BpCIR/o/CzlJILAltL7bc1N+M3g9ILO2ORsTuqIm2e9veD0DwoL6aUm6o1GtMeoNAHUM6emr+wLzYpCn8G5SmQzl3OBtE417UbhV6D0KeK5BaanKdT5cIaF3ZHQK6c9d5720tuDL6p8mIST6M8B6ElU37kBlMiKP8yETk1hpuhlAnOneFjRYuWMqj0PCkJKt9F5Rvr34PwSxAeLioOloNJvXXVIxT+6c54x4sMSnMLKv8oKDKu+metOCQRVOOstxeEvqD6V6LW69/0brMig2m/fc0apQGrPk4CgNBTVBJn9ebmMnvGUel2HjE/Kqm6WKR8yT5VpHgKiQettucRk6DytVIHUPgdiH8u+rLzB1B52VXurWQgKl0PohKXGIR6wvpLPQULq84mEHqFSpP2ewPE/NCKetlDae40xaJy35pBfBmUvzdl+GAlUkOu6YxULS43w61h66NbYbu09OCLTkyA0DgI9+e94A6Tukk+xuGGMPWC3vwkLmm9pVOgBTqdd1l3nVlv/TSm5SdA6K11srjEIHSyqICECzxsTTzuRd6Yt8WpAig0gUr3Iiziw9Yk4npdDUAYLStMF6U22CC3ZK2sVqStC94eVP5YIKrIQUA5G04OyQcBExQoTaPQbNlBwGBjio0rRp7Ec/PUSGONPgXkylkLu30fp0qYTiy85mls0nXj7YAJzpq49dNyeR6ENUgZmsyd6a8Y3nIIRqIw1VaCoT1sbUN/B/rwt73jZctTSxl3puuQUyuAFZm032791OotKGvwCI/YO6tINf0L86/wB8IZwYpd+5ekAAAAAElFTkSuQmCC",
            error: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nM1Xy24TMRTNIkC6oyzKEii/UTq8FoVQ4nNGAxsgu+6Br2gD/QUooiCB2PAWQgKq9h8oqPwBzQJEas9i0HHakjTxdEKDypUsjWxfH5/r+5pS6X+XLElGNshpC9xxwKIFPmn4b7KRGnMpq9crQwNskeMOeGCBnxb47sgnFrjrgJsa/pt8asl17XHA/VaSnPh7hlNThyw5bwHrgOcpeSaLonJwfxSVU+CsJV9KR5bRGYOBTk8ftcCKAz67OD416KWdMZEDvlhgOQPGCoM64JsF3ma12uFBQbfPqVZHLfnOAWu7gnvzAiseNMeshcGjqCxwzzxJDgY36k1l3r0w7QGvVkcduSrP77tBnmjJDTlRacjiyEk5XMuYk72LChnyRd9bA2POmIldAYyZCL2nBV45cqH74CQZUQyG2MqzfYjE8bUQqNZ86AWiII3jcxb40ZVkNoDLSg55DmXj+MpmfN7oWSOv+jXyekg/m5k5oCSTAtVOxYayT0hpJ6tO5v3mQuLIZxaY65x4HPS6HOZFmHbpwqfaxc6JD468VUS5i2VBplviyNvC2n9gBzxSUi8E2mHePIcL6M478uF+Odfs9oSKuCWbcvmc2wYdqQjzrB1OzdSYC38m6/WKglv1tO9NjYkKJxByst96Sp7vSSD+cHJBRTwnZUYh0M4LBlMm+doB93oWWrXacV8kAqz3Imkcn/ZFghzvu8E3cuSqStmwQLMkOeKAr11OFWgEllW8h9IIyKGA9xZYym0Ett8TWPPge2AupgIt1PpsiTaKucyu9ykNKPKTTfMuFQbd0d425HAq4qqneXGuNR8y5JtNndldzZsnaol8qKmhJ9d99mn3Zu2Gvp0GNddUnCpkfpHHSsOSrF6vqIirnirfWvKjhv8G5lLy4lB/Yf6V/AauiC4PU3VlCgAAAABJRU5ErkJggg==",
            warning: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACDElEQVR4nNWXvUtcQRTFf4IbN52KmDKunbV1El0FiUkEW7G2V1OHFDa66/4LaogWCdsYjRIkfrDpUosf6H+gFtlCSRG5cJRh2ffezO6+IgcuDPfNzNkZzj13Fv4DPAXeAUVgHThU2LgAvAWyrSTsBz4BVeAK+AIsA7MKG38FrjVnFcg1Q9gBlIA7YBMYBtpj5tu3PLClNUXtEYRnwC/gBHjRwI9+BZwBFaA3hPQS2AU6aRxdwA/gwoe8QyfdTbjWNmBMYeMotIu8AjyJIy7pepNO+hH4p/jgcfJTKT9SvSaKlyRj3yH+6TF/CLiNUruVzDf8MA38VUx5rtkG1uqZQ1UlEyJCC1+MAH9qTWZC5hAnqGaRkcm8cZMFuY8PBoAZJ3oCyMvAkpvYkNP4YBI4dsQ1GEC8LG9/hJn9XMAGgw0Sz6siHrGvZNrE72vLL+SqmyEuAZ8bFVczxGVg0U1YE7+R5NMizojjtZvMqrjzKRKP1jMQZGdbKRJ/B1bqfcjJyK2JJxnIgkO8oFwc8tq7L2pCUS3MWlmcgfyuCctFoRs4rxVVvYdARc27Fb5tgtoDjpIeAuiZciHyuJMnoVukXk+fB/Tq5Kdq4qHI63qPQkjday9IFNvqp3F1nlHJ7GjNos/1xiGnUquqn5ZlfQ8P+pJyN6pTK5nntBBZNXHrp+a3BwobW2681X9hUsE9UuCIv/bot20AAAAASUVORK5CYII=",
            confirm: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAACXBIWXMAAAsTAAALEwEAmpwYAAACRUlEQVR4nNWXvU9UURDFfwora0OUGCwFO0NtYqMiUslXb0GhtpoofwXushT8AX5EKSTbIAhBCAhrYqmFiWiwstIohVtAIEImOUuem8f9eC6FJ7nJy7y57+zMnTlzF/4DnAQGgCLwHHijZc8FoB/IN5LwPPAUqAI/gRfAGHBfy56ngF/yeQx0/gthC1ACtoFp4BrQ7PC3dz3AjPYU9Y0onAXeAp+Ayxl+9FXgM1AB2mNIvwLzwCmy4zSwAGyEkLco0nlPWkPRLPIKcMLlWFJ6fZFeAO4A93T2xzyRr6vyD61eK4orHtKHwC6wl1hrQJtjTzewdVi1W8u89JDeFNFHYFBFVJbN9rswCzxJE4eq0ubCa5FYqmuws/uuiJoce68Dv+tFZkDi4CuoLmAoxf4F+ONRrpxEpi9pLEh9suCiSN8F+JZVIweYlNLEwtrvvYh9RYnk1bT9ACb2D4jHuM58ItB/BFhOGpYzEPcq0g8RU2mknjhLqpcU7aWIPWP1qc5SXKbnO8DxiD1lYDRp6FepW8mH4hZwN8I/B2wCN5LGvJrb5ulRoTdNQJCc2RAPxTfgB9Aa6P8KeJT2okOyFxp1bVCcCfDt1gCyQZSKokaYjTIfhoHbATLbJkn9q6jSlKii4d2Ii4AV1CKw6rsIoGvKhshDIndFuhh69amhXZGv63xi0aP0rsaQJtNeUMHNap66+jynlpnTntGQ9LrQqVarSmTKupvVLvQl2TbVp9Yy52gg8hriNk+fASta9mw2U6SG/oU5EuwD81CFkoD03BIAAAAASUVORK5CYII=",
        };
        return `<img src='${icons[type]}'>`;
    }
}
const modal = new PopupJs();

function showSuccess(message, onConfirm) {
    modal.show({ title: "Success", message, type: "success", onConfirm });
}

function showError(message, onConfirm) {
    modal.show({ title: "Error", message, type: "error", onConfirm });
}

function showInfo(message, onConfirm) {
    modal.show({ title: "Info", message, type: "warning", onConfirm });
}

function showConfirm(message, onConfirm) {
    modal.show({ title: "Confirm", message, type: "confirm", showCancel: true, onConfirm });
}
